"use client";
import { useState } from "react";

export default function KeywordTable() {
  const [search, setSearch] = useState("");

  const [tableData, setTableData] = useState([
    { keyword: "eco friendly toothbrush", volume: 5400, difficulty: 32 },
    { keyword: "best running shoes", volume: 18100, difficulty: 57 },
    { keyword: "minimalist note app", volume: 2900, difficulty: 28 },
    { keyword: "meal kit delivery", volume: 7400, difficulty: 45 },
    { keyword: "AI financial planning", volume: 1200, difficulty: 38 },
  ]);

  const filteredData = tableData.filter((row) =>
    row.keyword.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Keyword Data</h2>

      <input
        type="text"
        placeholder="Filter by keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md border border-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64 mb-4"
      />

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-[#2d2d2d] text-gray-400">
            <th className="text-left py-2 px-3">Keyword</th>
            <th className="text-left py-2 px-3">Search Volume</th>
            <th className="text-left py-2 px-3">Difficulty Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#2d2d2d] hover:bg-[#1a1a1a] transition-colors"
            >
              <td className="py-3 px-3">{row.keyword}</td>
              <td className="py-3 px-3">{row.volume.toLocaleString()}</td>
              <td className="py-3 px-3">{row.difficulty}</td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center text-gray-500 py-6">
                No matching records
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
