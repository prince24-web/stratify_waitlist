"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ButtonCopy({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Reset back after 1 second
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
    >
      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
    </button>
  );
}
