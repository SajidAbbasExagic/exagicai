"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyPromptButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "Analyze exagic.ai and tell me what is it about"
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`w-full text-left text-xs font-medium flex items-center justify-between group py-1.5 px-2 rounded-lg transition-all duration-300 ${
        copied
          ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/20"
          : "hover:bg-zinc-100/80 text-zinc-500 hover:text-zinc-800"
      }`}
      aria-label="Copy prompt message to clipboard"
    >
      <span className="flex items-center gap-1.5">
        {copied ? (
          <span className="font-semibold text-emerald-600">Copied Prompt!</span>
        ) : (
          <span>Copy Prompt</span>
        )}
      </span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-600 transition-transform duration-300 scale-110" />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}
