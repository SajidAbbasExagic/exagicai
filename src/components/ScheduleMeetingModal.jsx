"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendMeetingRequest } from "@/app/actions/contact";

const TIMEZONE = "America/Los_Angeles";
const SLOT_MINUTES = 60;
const BUSINESS_START = 9;
const BUSINESS_END = 21;
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function getDateKey(date) {
  return date.toLocaleDateString("en-CA", { timeZone: TIMEZONE });
}

function isWeekend(date) {
  const weekday = date.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: TIMEZONE,
  });
  return weekday === "Sat" || weekday === "Sun";
}

function formatDayLabel(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: TIMEZONE,
  });
}

function formatDateLabel(date) {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    timeZone: TIMEZONE,
  });
}

function formatTimeLabel(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: TIMEZONE,
  });
}

function getTimezoneLabel() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    timeZoneName: "longGeneric",
  }).formatToParts(new Date());
  return parts.find((part) => part.type === "timeZoneName")?.value || "Pacific Time";
}

function getCurrentTimeLabel() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: TIMEZONE,
  });
}

function buildSlotsForDate(date) {
  if (isWeekend(date)) return [];

  const slots = [];
  const now = Date.now();
  const dateKey = getDateKey(date);

  // Compute timezone offset once per date instead of in a loop
  const probe = new Date(`${dateKey}T12:00:00Z`);
  const offset =
    probe.getTime() -
    new Date(probe.toLocaleString("en-US", { timeZone: TIMEZONE })).getTime();

  for (let hour = BUSINESS_START; hour < BUSINESS_END; hour++) {
    for (let minute = 0; minute < 60; minute += SLOT_MINUTES) {
      const local = new Date(
        `${dateKey}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`
      );
      const timestamp = local.getTime() + offset;
      if (timestamp <= now) continue;
      slots.push(new Date(timestamp));
    }
  }

  return slots;
}

export default function ScheduleMeetingModal({ isOpen, onClose }) {
  const pathname = usePathname();
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [step, setStep] = useState("pick");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const weekDates = useMemo(() => {
    const start = addDays(startOfDay(new Date()), weekOffset * 7);
    return Array.from({ length: 7 }, (_, index) => addDays(start, index));
  }, [weekOffset]);

  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    return buildSlotsForDate(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setWeekOffset(0);
      setSelectedDate(null);
      setSelectedSlot(null);
      setStep("pick");
      setName("");
      setEmail("");
      setStatus(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!selectedDate && weekDates.length > 0) {
      const firstAvailable = weekDates.find((date) => !isWeekend(date));
      if (firstAvailable) setSelectedDate(firstAvailable);
    }
  }, [weekDates, selectedDate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedSlot) return;

    setIsSubmitting(true);
    setStatus(null);

    if (!window.grecaptcha) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "meeting_submit" }
        );

        const result = await sendMeetingRequest({
          name,
          email,
          dateLabel: selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: TIMEZONE,
          }),
          timeLabel: formatTimeLabel(selectedSlot),
          timezone: getTimezoneLabel(),
          path: pathname,
          recaptchaToken: token,
        });

        setStatus(result?.success ? "success" : "error");
      } catch (error) {
        console.error("CAPTCHA error:", error);
        setStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center px-3 pb-4 pt-20 sm:px-6 sm:pb-6 sm:pt-24">
      <button
        type="button"
        aria-label="Close scheduling modal"
        className="absolute inset-0 bg-zinc-950/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedule-meeting-title"
        className="relative z-10 mt-2 flex h-[min(calc(100dvh-6.5rem),560px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-[0_32px_80px_rgba(0,0,0,0.15)] sm:mt-3 sm:h-[min(calc(100dvh-8.25rem),560px)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-200/50 hover:text-zinc-800"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {CALENDLY_URL ? (
          <div className="min-h-0 flex-1 overflow-y-auto pt-10 px-4 sm:px-6">
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
            <div
              className="calendly-inline-widget min-h-full"
              data-url={CALENDLY_URL}
            />
          </div>
        ) : status === "success" ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-16 text-center sm:px-6 sm:py-20">
            <h3 className="text-2xl font-bold text-zinc-900">
              Meeting request sent
            </h3>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed max-w-md mx-auto">
              Thanks, {name}. We&apos;ll confirm your meeting for{" "}
              {formatTimeLabel(selectedSlot)} on{" "}
              {formatDateLabel(selectedDate)} shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : step === "confirm" ? (
          <form onSubmit={handleSubmit} className="min-h-0 flex-1 overflow-y-auto px-4 py-8 pr-12 sm:px-6 sm:py-10 sm:pr-14">
            <button
              type="button"
              onClick={() => setStep("pick")}
              className="mb-6 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              ← Back
            </button>
            <h3 className="text-xl font-bold text-zinc-900">Confirm your meeting</h3>
            <p className="mt-2 text-sm text-zinc-600">
              {formatDayLabel(selectedDate)}, {formatDateLabel(selectedDate)} at{" "}
              {formatTimeLabel(selectedSlot)} ({getTimezoneLabel()})
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-rose-600">
                Something went wrong. Please try again or email inquiries@exagic.ai.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-lg bg-brand py-3.5 text-sm font-semibold text-white hover:bg-brand/90 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Scheduling..." : "Schedule meeting"}
            </button>
          </form>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="shrink-0 px-4 pt-8 pr-12 sm:px-6 sm:pt-10 sm:pr-14">
            <h3
              id="schedule-meeting-title"
              className="text-base font-bold text-zinc-900 sm:text-lg"
            >
              What day is best for you?
            </h3>

            <div className="mt-3 flex min-w-0 items-center gap-1.5 sm:mt-4 sm:gap-2">
              <button
                type="button"
                onClick={() => setWeekOffset((prev) => Math.max(0, prev - 1))}
                disabled={weekOffset === 0}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-800 disabled:opacity-30"
                aria-label="Previous week"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto no-scrollbar sm:gap-2">
                {weekDates.map((date) => {
                  const isSelected =
                    selectedDate &&
                    getDateKey(date) === getDateKey(selectedDate);
                  const disabled = isWeekend(date);

                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      disabled={disabled}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedSlot(null);
                      }}
                      className={`min-w-[3.75rem] shrink-0 rounded-xl px-2 py-2.5 text-center transition-colors sm:min-w-[4.5rem] sm:px-3 sm:py-3 ${
                        isSelected
                          ? "bg-brand text-white"
                          : disabled
                            ? "bg-zinc-100 text-zinc-300 cursor-not-allowed"
                            : "border border-zinc-200 bg-white text-zinc-800 hover:border-brand/40"
                      }`}
                    >
                      <span className="block text-xs font-medium">
                        {formatDayLabel(date)}
                      </span>
                      <span className="mt-1 block text-sm font-bold">
                        {formatDateLabel(date)}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setWeekOffset((prev) => prev + 1)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-800"
                aria-label="Next week"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            </div>

            <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden px-4 pb-5 sm:mt-5 sm:px-6 sm:pb-6">
              <div className="shrink-0">
                <h3 className="text-base font-bold text-zinc-900 sm:text-lg">
                  What time works?
                </h3>
                <p className="mt-1.5 text-xs text-zinc-500 sm:mt-2 sm:text-sm">
                  30 minute meeting • {getTimezoneLabel()} ({getCurrentTimeLabel()})
                </p>
              </div>

              {timeSlots.length === 0 ? (
                <p className="mt-6 text-sm text-zinc-500">
                  No available times for this day. Please choose another date.
                </p>
              ) : (
                <div className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
                  <div className="grid grid-cols-2 gap-2 pb-1 sm:grid-cols-3 sm:gap-3">
                    {timeSlots.map((slot) => {
                      const isSelected =
                        selectedSlot && selectedSlot.getTime() === slot.getTime();

                      return (
                        <button
                          key={slot.toISOString()}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot);
                            setStep("confirm");
                          }}
                          className={`rounded-lg border px-3 py-2.5 text-xs font-bold transition-colors sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm ${
                            isSelected
                              ? "border-brand bg-brand text-white"
                              : "border-zinc-200 bg-white text-zinc-800 hover:border-brand hover:text-brand"
                          }`}
                        >
                          {formatTimeLabel(slot)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </div>
      {/* Google reCAPTCHA v3 Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
    </div>
  );
}
