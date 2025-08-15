"use client";
import { useState } from "react";
import { Copy, Edit2, Save } from "lucide-react"; // icons
import Loader from "../Loader"; // adjust path
import KeywordTable from "../CustomTable";

export default function SEOPlan() {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [metadata, setMetadata] = useState([
    {
      title: "Boosting Organic Visibility",
      description: "Meta title and description crafted to rank higher in SERPs.",
    },
    {
      title: "Optimized Meta Content",
      description: "Concise yet keyword-rich metadata for better click-through rates.",
    },
    {
      title: "Localized SEO Metadata",
      description: "Meta tags tailored for geo-specific search audiences.",
    },
  ]);

  const handleGenerate = () => {
    setLoading(true);
    setShowData(false);
    setTimeout(() => {
      setLoading(false);
      setShowData(true);
      setHasGenerated(true);
    }, 1200);
  };

  const handleCopy = (meta) => {
    navigator.clipboard.writeText(
      `Title: ${meta.title}\nDescription: ${meta.description}`
    );
  };

  const handleEditChange = (field, value, index) => {
    const updated = [...metadata];
    updated[index][field] = value;
    setMetadata(updated);
  };

  const handleSave = () => {
    setEditingIndex(null);
  };

  return (
    <div className="p-6 bg-[#0f0f0f] min-h-screen text-white flex flex-col">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">Your SEO Plan</h1>

      {/* If no data yet — center button vertically */}
      {!showData && !loading && (
        <div className="flex-1 flex justify-center items-center">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium disabled:opacity-50"
          >
            {hasGenerated ? "Regenerate" : "Generate"}
          </button>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center flex-1">
          <Loader />
        </div>
      )}

      {/* If data is shown — content first, button at bottom */}
      {showData && (
        <div className="flex flex-col flex-1">
          <div className="space-y-6">
            {metadata.map((meta, index) => (
              <div key={index} className="relative">
                {/* Icons in top-right corner */}
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

                {/* Code container */}
                <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto border border-[#2d2d2d]">
                  <code>
                    {editingIndex === index ? (
                      <>
                        Title:{" "}
                        <input
                          value={meta.title}
                          onChange={(e) =>
                            handleEditChange("title", e.target.value, index)
                          }
                          className="bg-transparent border-b border-gray-500 outline-none text-white"
                        />
                        {"\n"}
                        Description:{" "}
                        <input
                          value={meta.description}
                          onChange={(e) =>
                            handleEditChange("description", e.target.value, index)
                          }
                          className="bg-transparent border-b border-gray-500 outline-none text-white"
                        />
                      </>
                    ) : (
                      `Title: ${meta.title}\nDescription: ${meta.description}`
                    )}
                  </code>
                </pre>
              </div>
            ))}
            <KeywordTable />
          </div>

          {/* Button at bottom */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium disabled:opacity-50"
            >
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
