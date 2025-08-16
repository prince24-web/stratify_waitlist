"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Copy, Pencil } from "lucide-react";
import APIService from "@/services/api";

export default function BlogPost({ persona }) {
    const [isEditing, setIsEditing] = useState(false);
    const [blog, setBlog] = useState(null);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (!persona) return;
        const fetchBlog = async () => {
            try {
                const res = await APIService.blogs.getAll({
                    personaId: persona._id,
                });
                const blogs = res.data.blogs || [];
                if (blogs.length > 0) {
                    setBlog(blogs[0]); // show first blog by default
                    setContent(blogs[0].content);
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };
        fetchBlog();
    }, [persona]);

    function copyToClipboard() {
        navigator.clipboard.writeText(content);
        alert("Blog content copied to clipboard!");
    }

    if (!blog) return <p className="text-gray-500">No blog posts found.</p>;

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
            <Card className="bg-[#121212] border border-gray-800 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">
                        {blog.title}
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
                        <p className="leading-relaxed text-gray-300">
                            {content}
                        </p>
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
                            <Pencil className="w-4 h-4 text-gray-300" />
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
