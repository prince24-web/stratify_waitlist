"use client";;
/**
 * @author: @dorian_baffier
 * @description: Card Stack
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Dummy Products Data
const products = [
    {
        id: "instant-pay",
        title: "Quick Pay",
        subtitle: "Instant Transfers",
        image: "/undraw.svg",
        specs: [
            { label: "Speed", value: "Instant" },
            { label: "Security", value: "256-bit" },
            { label: "Limit", value: "$50,000" },
            { label: "Fee", value: "0.5%" },
        ],
    },
    {
        id: "crypto-pay",
        title: "Crypto Pay",
        subtitle: "Web3 Payments",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
        specs: [
            { label: "Network", value: "Multi-chain" },
            { label: "Gas", value: "Optimized" },
            { label: "Support", value: "24/7" },
            { label: "Security", value: "Top-tier" },
        ],
    },
    {
        id: "business-pay",
        title: "Business Pay",
        subtitle: "Enterprise Solutions",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
        specs: [
            { label: "Volume", value: "Unlimited" },
            { label: "API", value: "REST/SDK" },
            { label: "Support", value: "Premium" },
            { label: "Features", value: "Custom" },
        ],
    },
    {
        id: "global-pay",
        title: "Global Pay",
        subtitle: "International Transfers",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&auto=format&fit=crop&q=80",
        specs: [
            { label: "Countries", value: "180+" },
            { label: "FX Rate", value: "Real-time" },
            { label: "Speed", value: "Same-day" },
            { label: "Support", value: "Local" },
        ],
    },
];

const Card = ({ product, index, totalCards, isExpanded }) => {
    const centerOffset = (totalCards - 1) * 5;

    const defaultX = index * 10 - centerOffset;
    const defaultY = index * 2;
    const defaultRotate = index * 1.5;
    const defaultScale = 1;

    const cardWidth = 320;
    const cardOverlap = 240;
    const totalExpandedWidth =
        cardWidth + (totalCards - 1) * (cardWidth - cardOverlap);
    const expandedCenterOffset = totalExpandedWidth / 2;

    const spreadX =
        index * (cardWidth - cardOverlap) -
        expandedCenterOffset +
        cardWidth / 2;
    const spreadY = 0;
    const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
    const spreadScale = 1;

    return (
        <motion.div
            initial={{ x: defaultX, y: defaultY, rotate: defaultRotate, scale: defaultScale }}
            animate={{
                x: isExpanded ? spreadX : defaultX,
                y: isExpanded ? spreadY : defaultY,
                rotate: isExpanded ? spreadRotate : defaultRotate,
                scale: isExpanded ? spreadScale : defaultScale,
                zIndex: totalCards - index,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                mass: 0.8,
                restDelta: 0.001,
                restSpeed: 0.001,
            }}
            className={cn(
                "absolute inset-0 rounded-2xl p-6 w-full",
                "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950",
                "border border-neutral-700/40",
                "before:absolute before:inset-0 before:rounded-2xl",
                "before:bg-gradient-to-b before:from-neutral-800/40 before:via-neutral-900/20 before:to-transparent",
                "before:opacity-100 before:transition-opacity before:duration-500",
                "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br",
                "after:from-neutral-900/80 after:to-black/70",
                "after:z-[-1] after:blur-xl",
                "backdrop-blur-xl backdrop-saturate-150",
                "shadow-[0_8px_20px_rgb(0,0,0,0.5)]",
                "hover:border-neutral-600/50",
                "hover:shadow-[0_12px_40px_rgb(0,0,0,0.7)]",
                "hover:backdrop-blur-2xl",
                "hover:bg-gradient-to-br hover:from-neutral-800 hover:via-neutral-900 hover:to-black",
                "transition-all duration-500 ease-out",
                "transform-gpu overflow-hidden"
            )}
            style={{
                maxWidth: "320px",
                transformStyle: "preserve-3d",
                perspective: "2000px",
                left: "50%",
                marginLeft: "-160px",
                transform: isExpanded
                    ? ""
                    : `
                        translateY(${index * 10}px)
                        translateX(${index * 1}px)
                        rotate(${index * 3}deg)
                        scale(${1 - index * 0.02})
                    `,
                zIndex: products.length - index,
            }}>
            <div className="absolute inset-1 rounded-xl bg-neutral-950/60 backdrop-blur-sm border border-neutral-700/50" />
            <div className="relative z-10">
                <dl className="mb-4 grid grid-cols-4 gap-2 justify-center">
                    {product.specs.map((spec) => (
                        <div key={spec.label} className="text-[10px] flex flex-col items-start text-left">
                            <dd className="font-medium text-gray-400 w-full text-left">
                                {spec.value}
                            </dd>
                            <dt className="text-gray-200 mb-0.5 w-full text-left">
                                {spec.label}
                            </dt>
                        </div>
                    ))}
                </dl>

                <div
                    className={cn(
                        "aspect-[16/11] w-full overflow-hidden rounded-lg",
                        "bg-neutral-900",
                        "transition-transform duration-300 ease-out",
                        "group-hover:scale-[1.02]",
                        "border border-neutral-700/50",
                        "shadow-inner"
                    )}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover w-full h-full"
                        loading="lazy" />
                </div>

                <div className="mt-4">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold tracking-tight text-white text-left">
                            {product.title}
                        </h2>
                        <span className="block text-3xl font-semibold tracking-tight bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent text-left">
                            {product.subtitle}
                        </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400 text-left">
                        Experience the iconic design that revolutionized technology
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function CardStackExample({ className }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => setIsExpanded(!isExpanded);

    return (
        <button
            className={cn(
                "relative mx-auto cursor-pointer",
                "min-h-[440px] w-full max-w-[90vw]",
                "md:max-w-[1200px]",
                "appearance-none bg-transparent border-0 p-0",
                "flex items-center justify-center mb-8",
                className
            )}
            onClick={handleToggle}
            aria-label="Toggle card stack"
            type="button">
            {products.map((product, index) => (
                <Card
                    key={product.id}
                    product={product}
                    index={index}
                    totalCards={products.length}
                    isExpanded={isExpanded}
                />
            ))}
        </button>
    );
}
