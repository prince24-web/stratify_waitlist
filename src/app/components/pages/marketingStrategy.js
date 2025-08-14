"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketingStrategy } from "../marketingStrategyDats";

export default function MarketingStrategyDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#0f0f0f]">
      {marketingStrategy.map((item, index) => (
        <Card
          key={index}
          className="bg-[#0f0f0f] border border-gray-800 rounded-xl hover:border-gray-600 transition-colors duration-300"
        >
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 text-sm mb-3">{item.description}</p>
            <p className="text-gray-300 text-sm italic">{item.example}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
