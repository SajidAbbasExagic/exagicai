"use client";

import { useState } from "react";
import ScheduleMeetingModal from "./ScheduleMeetingModal";

export default function ScheduleMeetingButton({
  className = "",
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>
      <ScheduleMeetingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
