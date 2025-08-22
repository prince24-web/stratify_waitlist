import { useState } from "react";
import { Copy, Check } from "lucide-react";

function KeywordInfoBlock({ outline, intent, slug }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#121212] border border-gray-800 rounded-xl p-5 space-y-6 shadow-md w-full max-w-5xl">
      {/* Outline */}
      <div>
        <h3 className="text-sm text-gray-400 uppercase">Outline</h3>
        <p className="text-gray-100 font-medium">{outline}</p>
      </div>

      {/* Search Intent */}
      <div>
        <h3 className="text-sm text-gray-400 uppercase">Search Intent</h3>
        <span className="inline-block px-3 py-1 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-200 text-sm font-medium">
          {intent}
        </span>
      </div>

      {/* Slug */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-400 uppercase">Slug</h3>
          <p className="text-gray-300">/{slug}</p>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-[#1f1f1f] rounded-lg transition-colors"
          title="Copy slug"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}

// --- Mock Usage ---
export default function App() {
  const mockData = {
    outline: "Step-by-step guide on SEO keyword research",
    intent: "Informational",
    slug: "seo-keyword-research-guide",
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-6">
      <KeywordInfoBlock
        outline={mockData.outline}
        intent={mockData.intent}
        slug={mockData.slug}
      />
    </div>
  );
}
