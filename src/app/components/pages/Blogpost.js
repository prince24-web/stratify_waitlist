"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Copy, Pencil } from "lucide-react";

export default function BlogPost() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(mockBlog.content);

  function copyToClipboard() {
    navigator.clipboard.writeText(content);
    alert("Blog content copied to clipboard!");
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <Card className="bg-[#121212] border border-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            {mockBlog.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 p-3 rounded-lg bg-[#0f0f0f] border border-gray-800 text-white focus:outline-none focus:border-gray-600"
            />
          ) : (
            <p className="leading-relaxed text-gray-300">{content}</p>
          )}

          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-gray-300 text-sm transition-colors"
            >
              <Copy className="w-4 h-4 text-gray-300" /> Copy
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-300 transition-colors"
            >
              <Pencil className="w-4 h-4 text-gray-300" />{" "}
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const mockBlog = {
  title: "How to Boost Your Startup’s Online Presence",
  content: `In today’s competitive market, having a strong online presence is essential for startups. 
From social media marketing to SEO optimization, every step you take impacts how potential customers see your brand. 
Start by creating high-quality content that resonates with your audience, optimize your website for search engines, and 
leverage paid ads to reach a broader audience. Consistency and authenticity are key to building trust and long-term success.`,
};
