import React, { useState } from 'react'; 
import { Copy, Check } from 'lucide-react';

const KeywordTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [copiedKeyword, setCopiedKeyword] = useState(null);

  const keywords = [
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
  ];

  const handleCopy = async (keyword) => {
    try {
      await navigator.clipboard.writeText(keyword);
      setCopiedKeyword(keyword);
      setTimeout(() => setCopiedKeyword(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#0f0f0f] rounded-md shadow-md">
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-4 px-4 font-semibold text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="appearance-none w-4 h-4 bg-[#1a1a1a] border border-gray-600 rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    />
                    <svg className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="flex items-center space-x-1">
                    <span>↑</span>
                    <span>Keywords</span>
                    <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">i</div>
                  </span>
                </div>
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-300 text-sm">
                <div className="flex items-center space-x-1">
                  <span>Search Volume</span>
                  <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">i</div>
                </div>
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-300 text-sm">
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
                className={`border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors ${
                  item.keyword === "world market" ? "bg-[#1a1a1a]" : ""
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="appearance-none w-4 h-4 bg-[#1a1a1a] border border-gray-600 rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      />
                      <svg className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-100 font-medium">{item.keyword}</span>
                    {hoveredRow === index && (
                      <div className="flex items-center space-x-1 ml-2">
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
                        <button className="p-1 hover:bg-[#2a2a2a] rounded transition-colors">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                        <button className="p-1 hover:bg-[#2a2a2a] rounded transition-colors">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
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
