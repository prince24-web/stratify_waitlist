"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import APIService from "../../../services/api";

export default function MarketingStrategyDisplay({ persona }) {
    const [strategies, setStrategies] = useState([]);

    useEffect(() => {
        if (!persona) return;
        const fetchStrategies = async () => {
            try {
                const res = await APIService.strategies.searchAll({
                    filter: {
                        op: "eq",
                        table: "persona_id",
                        value: persona.id,
                    },
                });
                setStrategies(res.data.strategies || []);
            } catch (err) {
                console.error("Error fetching marketing strategies:", err);
            }
        };
        fetchStrategies();
    }, [persona]);

    if (!strategies.length)
        return <p className="text-gray-500">No strategies yet.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#0f0f0f]">
            {strategies.map((item, index) => (
                <Card
                    key={index}
                    className="bg-[#0f0f0f] border border-gray-800 rounded-xl hover:border-gray-600 transition-colors duration-300"
                >
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">
                            {item.strategy_json.audience}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400 text-sm mb-3">
                            {item.strategy_json.unique_value}
                        </p>
                        <p className="text-gray-300 text-sm italic">
                            <ul>
                                {item.strategy_json.main_content_ideas.map(
                                    (x) => (
                                        <li key={x}>{x}</li>
                                    )
                                )}
                            </ul>
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
