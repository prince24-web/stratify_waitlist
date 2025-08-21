"use client";
import { useState, useEffect } from "react";
import { Copy, Edit2, Save } from "lucide-react";
import Loader from "../Loader";
import KeywordTable from "../CustomTable";
import APIService from "../../../services/api";

export default function SEOPlan({ persona }) {
    const [loading, setLoading] = useState(false);
    const [metadata, setMetadata] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        if (!persona) return;
        const fetchSEO = async () => {
            try {
                setLoading(true);
                const res = await APIService.seoPlans.searchAll({
                    filter: {
                        op: "eq",
                        column: "persona_id",
                        value: persona.id,
                    },
                });
                setMetadata(res.data.seoPlans || []);
            } catch (err) {
                console.error("Error fetching SEO plan:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchSEO();
    }, [persona]);

    const handleCopy = (meta) => {
        navigator.clipboard.writeText(
            `Title: ${meta.seo_plan_json.meta_title}\nDescription: ${meta.seo_plan_json.meta_description}`
        );
    };

    const handleEditChange = (field, value, index) => {
        const updated = [...metadata];
        updated[index][field] = value;
        setMetadata(updated);
    };

    const handleSave = () => setEditingIndex(null);

    if (loading) return <Loader />;

    if (!metadata.length)
        return <p className="text-gray-500">No SEO plan found.</p>;

    return (
        <div className="p-6 bg-[#0f0f0f] min-h-screen text-white flex flex-col">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Your SEO Plan
            </h1>
            <div className="space-y-6">
                {metadata.map((meta, index) => (
                    <div key={index} className="relative">
                        <div className="absolute top-2 right-2 flex gap-2">
                            {editingIndex === index ? (
                                <Save
                                    size={16}
                                    className="cursor-pointer text-green-500 hover:text-green-400"
                                    onClick={handleSave}
                                />
                            ) : (
                                <Edit2
                                    size={16}
                                    className="cursor-pointer text-gray-400 hover:text-gray-300"
                                    onClick={() => setEditingIndex(index)}
                                />
                            )}
                            <Copy
                                size={16}
                                className="cursor-pointer text-gray-400 hover:text-gray-300"
                                onClick={() => handleCopy(meta)}
                            />
                        </div>
                        <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto border border-[#2d2d2d]">
                            <code>
                                {editingIndex === index ? (
                                    <>
                                        Title:{" "}
                                        <input
                                            value={
                                                meta.seo_plan_json.meta_title
                                            }
                                            onChange={(e) =>
                                                handleEditChange(
                                                    "title",
                                                    e.target.value,
                                                    index
                                                )
                                            }
                                            className="bg-transparent border-b border-gray-500 outline-none text-white"
                                        />
                                        {"\n"}
                                        Description:{" "}
                                        <input
                                            value={
                                                meta.seo_plan_json
                                                    .meta_description
                                            }
                                            onChange={(e) =>
                                                handleEditChange(
                                                    "description",
                                                    e.target.value,
                                                    index
                                                )
                                            }
                                            className="bg-transparent border-b border-gray-500 outline-none text-white"
                                        />
                                    </>
                                ) : (
                                    `Title: ${meta.seo_plan_json.meta_title}\nDescription: ${meta.seo_plan_json.meta_description}`
                                )}
                            </code>
                        </pre>
                    </div>
                ))}
                <KeywordTable />
            </div>
        </div>
    );
}
