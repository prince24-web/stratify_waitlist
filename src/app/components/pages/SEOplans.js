"use client";
import { useState } from "react";
import { Copy, Edit2, Save } from "lucide-react";
import KeywordTable from "../CustomTable";
import APIService from "../../../services/api";
import CodeDisplay from "../code-Block";
import Loading from "../loader";
import KeywordInfoBlock from "../SEO_content"; 

import CodeDisplay from "../code-Block";
import KeywordInfoBlock from "../SEO_content";
import LoaderSpiner from "../mainloader";
import Loading from "../loader";
export default function SEOPlan({ persona }) {
    const [loading, setLoading] = useState(false);
    const [metadata, setMetadata] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [generated, setGenerated] = useState(false);

    const fetchSEO = async () => {
        try {
            setLoading(true);
            // simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
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
            setGenerated(true);
        }
    };

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

    if (loading) return <Loading />;

    if (!metadata.length)
        return <p className="text-gray-500">No SEO plan found.</p>;

    return (
        <div className="p-6 bg-[#0f0f0f] min-h-screen text-white flex flex-col">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Your SEO Plan
            </h1>
            <div className="space-y-6">
                <KeywordTable />
                <KeywordInfoBlock />
                <CodeDisplay />
            </div>
            {!generated ? (
                <div className="flex-grow flex items-center justify-center">
                    <button
                        onClick={fetchSEO}
                        disabled={loading}
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl shadow-md font-semibold text-lg transition"
                    >
                        {loading ? <Loading /> : "Generate SEO Plan"}
                    </button>
                </div>
            ) : (
                <>
                    {loading ? (
                        <div className="flex-grow flex items-center justify-center">
                            <LoaderSpiner />
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold mb-6 text-center">
                                Your SEO Plan
                            </h1>
                            <div className="space-y-6 flex-1">
                                <KeywordTable />
                                <KeywordInfoBlock />
                                <CodeDisplay />
                            </div>

                            {/* Regenerate button at bottom */}
                            <div className="flex justify-center mt-10">
                                <button
                                    onClick={fetchSEO}
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl shadow-md font-semibold text-lg transition"
                                >
                                    Regenerate
                                </button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
