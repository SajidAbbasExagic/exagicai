"use client";

import { useState } from "react";

export default function BlogCTA() {
  const [url, setUrl] = useState("");

  return (
    <div className="bg-[#f06030] rounded-lg p-8 text-white shadow-xl h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center leading-tight mb-4">
        Do you want more AI Visibility?
      </h2>
      <p className="text-center text-sm mb-6 leading-relaxed opacity-90">
        We're dedicated to making industrial brands citable in AI search. Our
        only question is, will it be yours?
      </p>

      <div className="flex bg-white rounded overflow-hidden mb-4">
        <input
          type="text"
          placeholder="WWW.YOURDOMAIN.COM"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-4 py-3 text-zinc-900 text-sm focus:outline-none placeholder:text-zinc-300"
        />
        <button className="bg-[#1b63da] px-6 py-3 text-xs font-bold tracking-widest hover:bg-[#1652b5] transition-colors">
          CONTINUE
        </button>
      </div>

      <p className="text-[10px] leading-tight text-center opacity-80">
        Please enter a valid website address to continue.
        <br />
        Enter your URL to get a free visibility audit.
      </p>
    </div>
  );
}
