import React, { useState } from 'react';
import { Copy, Check, Trash2 } from 'lucide-react';

const KeywordTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [copiedKeyword, setCopiedKeyword] = useState(null);
  const [keywords, setKeywords] = useState([
    {
      keyword: "market",
      searchVolume: "5,000,000",
      competition: { level: "Low", value: 4, color: "text-green-500" }
    },
    {
      keyword: "stock market today",
      searchVolume: "4,090,000",
      competition: { level: "Low", value: 3, color: "text-green-500" }
    },
    {
      keyword: "compare the market",
      searchVolume: "1,500,000",
      competition: { level: "High", value: 72, color: "text-red-500" }
    },
    {
      keyword: "world market",
      searchVolume: "1,830,000",
      competition: { level: "High", value: 100, color: "text-red-500" }
    },
    {
      keyword: "global market",
      searchVolume: "1,830,000",
      competition: { level: "Low", value: 2, color: "text-green-500" }
    }
  ]);
  const [checkedRows, setCheckedRows] = useState([]);


  const handleCopy = async (keyword) => {
    try {
      await navigator.clipboard.writeText(keyword);
      setCopiedKeyword(keyword);
      setTimeout(() => setCopiedKeyword(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDelete = (index) => {
    setKeywords((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#0f0f0f] rounded-md shadow-md">
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-4 px-4 font-semibold text-gray-300 text-2xl">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center space-x-1">
                    <span>↑</span>
                    <span>Keywords</span>
                    <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">i</div>
                  </span>
                </div>
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-300 text-2xl">
                <div className="flex items-center space-x-1">
                  <span>Search Volume</span>
                  <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">i</div>
                </div>
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-300 text-2xl">
                <div className="flex items-center space-x-1">
                  <span>Competition</span>
                  <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">i</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors 
                ${checkedRows.includes(index) ? "bg-[#1a1a1a]" : ""}`}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >

                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 bg-[#1a1a1a] border border-gray-600 rounded checked:bg-blue-600"
                      checked={checkedRows.includes(index)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedRows([...checkedRows, index]);
                        } else {
                          setCheckedRows(checkedRows.filter(i => i !== index));
                        }
                      }}
                    />

                    <span className="text-gray-100 font-medium">{item.keyword}</span>
                    {hoveredRow === index && (
                      <div className="flex items-center space-x-1 ml-2">
                        {/* Copy button */}
                        <button
                          onClick={() => handleCopy(item.keyword)}
                          className="p-1 hover:bg-[#2a2a2a] rounded transition-colors"
                          title="Copy keyword"
                        >
                          {copiedKeyword === item.keyword ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        {/* Delete button */}
                        <button
                          onClick={() => handleDelete(index)}
                          className="p-1 hover:bg-[#2a2a2a] rounded transition-colors"
                          title="Delete keyword"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-100 font-medium">{item.searchVolume}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`font-medium ${item.competition.color}`}>
                    {item.competition.value} ({item.competition.level})
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordTable;
