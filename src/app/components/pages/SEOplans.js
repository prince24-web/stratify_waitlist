"use client";
import { useState, useEffect } from "react";
import { Copy, Edit2, Save } from "lucide-react";
import Loader from "../Loader";
import KeywordTable from "../CustomTable";
import APIService from "../../../services/api";
import ExamplePage from "../code-Block"


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
           <KeywordTable/>
           <ExamplePage/>
            </div>
        </div>
    );
}
