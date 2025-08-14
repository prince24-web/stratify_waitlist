"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Copy, Pencil } from "lucide-react";

const initialPosts = [
  {
    date: "2025-08-15",
    title: "Why Great Marketing Won't Save a Bad Product",
    platform: "X",
    status: "Planned",
    content:
      "Marketing matters. But if your app is trash, no ad campaign will save it. Great product + great marketing = growth.",
  },
  {
    date: "2025-08-17",
    title: "The Founder’s Wake-Up Call",
    platform: "X",
    status: "Draft",
    content:
      "As a founder, I learned the hard way: Good ideas don’t sell themselves. You need marketing.",
  },
];

export default function ContentCalendar() {
  const [posts, setPosts] = useState(initialPosts);

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    alert("Post copied to clipboard!");
  };

  const handleEdit = (index) => {
    const newContent = prompt("Edit post content:", posts[index].content);
    if (newContent !== null) {
      const updatedPosts = [...posts];
      updatedPosts[index].content = newContent;
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <Card
          key={index}
          className="bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-md"
        >
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              {post.title}
            </CardTitle>
            <p className="text-gray-400 text-xs">
              {post.date} • {post.platform} • {post.status}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm mb-4">{post.content}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(post.content)}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              >
                <Pencil className="w-4 h-4" /> Edit
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
