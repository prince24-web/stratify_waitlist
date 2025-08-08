"use client";
import { useState } from "react";
import { MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function CustomTable() {
  const [search, setSearch] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const [tableData, setTableData] = useState([
    {
      name: "EcoBrush",
      tone: "Friendly",
      description: "A biodegradable toothbrush for eco-conscious consumers.",
      audience: "Environmentally aware millennials",
    },
    {
      name: "PowerFuel",
      tone: "Bold",
      description: "High-performance energy drink for athletes.",
      audience: "Fitness enthusiasts & athletes",
    },
    {
      name: "ChillNotes",
      tone: "Calm",
      description: "Minimal note-taking app with ambient design.",
      audience: "Students & productivity lovers",
    },
    {
      name: "QuickChef",
      tone: "Excited",
      description: "Meal kits delivered fast for busy professionals.",
      audience: "Young working adults",
    },
    {
      name: "FinPilot",
      tone: "Professional",
      description: "AI-powered financial planning for startups.",
      audience: "Startup founders & small business owners",
    },
  ]);

  const [editRow, setEditRow] = useState({
    name: "",
    tone: "",
    description: "",
    audience: "",
  });

  const filteredData = tableData.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditRow({ ...tableData[index] });
    setOpenMenuIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditRow({
      name: "",
      tone: "",
      description: "",
      audience: "",
    });
  };

  const saveEdit = (index) => {
    const updated = [...tableData];
    updated[index] = { ...editRow };
    setTableData(updated);
    cancelEdit();
  };

  const deleteRow = (index) => {
    const updated = [...tableData];
    updated.splice(index, 1);
    setTableData(updated);
    setOpenMenuIndex(null);
    if (selectedProjectIndex === index) {
      setSelectedProjectIndex(null);
    }
  };

  const handleEditChange = (field, value) => {
    setEditRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelectProject = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-md w-full max-w-6xl mx-auto relative">
      <h2 className="text-xl font-semibold mb-4">Existing Projects</h2>

      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Filter by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md border border-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
        />
        <button className="text-sm text-gray-400 hover:text-white border border-[#2d2d2d] px-3 py-1 rounded-md">
          Columns
        </button>
      </div>

      <table className="w-full text-sm border-collapse relative">
        <thead>
          <tr className="border-b border-[#2d2d2d] text-gray-400">
            <th className="py-2 px-3 text-center"></th>
            <th className="text-left py-2 px-3">Name</th>
            <th className="text-left py-2 px-3">Tone</th>
            <th className="text-left py-2 px-3">Description</th>
            <th className="text-left py-2 px-3">Target Audience</th>
            <th className="py-2 px-3 text-right"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => {
            const isEditing = editIndex === i;
            const isSelected = selectedProjectIndex === i;

            return (
              <tr
                key={i}
                className={`border-b border-[#2d2d2d] hover:bg-[#1a1a1a] transition-colors relative ${
                  isSelected ? "bg-[#1f1f1f]" : ""
                }`}
              >
                <td className="py-3 px-3 text-center">
                  <input
                    type="radio"
                    name="selectedProject"
                    checked={isSelected}
                    onChange={() => handleSelectProject(i)}
                    className="appearance-none w-4 h-4 rounded-full border border-[#3a3a3a] checked:border-4 checked:border-blue-500 bg-[#1a1a1a] cursor-pointer transition-colors"
                    />

                </td>
                <td className="py-3 px-3">
                  {isEditing ? (
                    <input
                      value={editRow.name}
                      onChange={(e) =>
                        handleEditChange("name", e.target.value)
                      }
                      className="bg-[#1a1a1a] border border-[#2d2d2d] text-white px-2 py-1 rounded w-full"
                    />
                  ) : (
                    row.name
                  )}
                </td>
                <td className="py-3 px-3">
                  {isEditing ? (
                    <input
                      value={editRow.tone}
                      onChange={(e) =>
                        handleEditChange("tone", e.target.value)
                      }
                      className="bg-[#1a1a1a] border border-[#2d2d2d] text-white px-2 py-1 rounded w-full"
                    />
                  ) : (
                    row.tone
                  )}
                </td>
                <td className="py-3 px-3">
                  {isEditing ? (
                    <input
                      value={editRow.description}
                      onChange={(e) =>
                        handleEditChange("description", e.target.value)
                      }
                      className="bg-[#1a1a1a] border border-[#2d2d2d] text-white px-2 py-1 rounded w-full"
                    />
                  ) : (
                    row.description
                  )}
                </td>
                <td className="py-3 px-3">
                  {isEditing ? (
                    <input
                      value={editRow.audience}
                      onChange={(e) =>
                        handleEditChange("audience", e.target.value)
                      }
                      className="bg-[#1a1a1a] border border-[#2d2d2d] text-white px-2 py-1 rounded w-full"
                    />
                  ) : (
                    row.audience
                  )}
                </td>
                <td className="py-3 px-3 text-right relative">
                  {isEditing ? (
                    <div className="space-x-2">
                      <button
                        onClick={() => saveEdit(i)}
                        className="px-3 py-1 text-sm border border-green-600 text-green-400 hover:text-green-300 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1 text-sm border border-[#2d2d2d] text-gray-400 hover:text-white rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        className="text-gray-400 hover:text-white"
                        onClick={() => toggleMenu(i)}
                      >
                        <MoreVertical size={16} />
                      </button>
                      {openMenuIndex === i && (
                        <div className="absolute right-3 mt-2 w-32 bg-[#1a1a1a] border border-[#2d2d2d] rounded-md shadow-lg z-10">
                          <button
                            onClick={() => startEdit(i)}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-[#2a2a2a]"
                          >
                            <Edit2 size={14} /> Edit
                          </button>
                          <button
                            onClick={() => deleteRow(i)}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-[#2a2a2a] text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </td>
              </tr>
            );
          })}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 py-6">
                No matching records
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
