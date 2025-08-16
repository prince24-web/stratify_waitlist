"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
    Menu,
    X,
    AppWindow,
    Search,
    BarChart3,
    Newspaper,
    CalendarDays,
    HelpCircle,
    Shield,
    Home,
    Bell,
    User,
    Boxes,
    Box,
} from "lucide-react";
import { ExpandedTabs } from "@/components/ui/expanded-tabs";
import { cn } from "@/lib/utils";
import MarketingStrategy from "../components/pages/marketingStrategy";
import SEOPlan from "../components/pages/SEOplans";
import BlogContainer from "../components/pages/Blogpost";
import ContentCalendar from "../components/pages/ContentCalender";
import APIService from "@/services/api";

function Templates() {
    return <div>📦 Here are your Templates</div>;
}

export default function Workspace() {
    const searchParams = useSearchParams();
    const personaId = searchParams.get("persona"); // ✅ from dashboard navigation

    const [isOpen, setIsOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [persona, setPersona] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch persona details
    useEffect(() => {
        if (!personaId) return;

        const fetchPersona = async () => {
            try {
                const res = await APIService.personas.getOne(personaId);
                // backend returns { status, data: { persona: {...} } }
                setPersona(res.data.persona);
            } catch (err) {
                console.error("Failed to fetch persona:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPersona();
    }, [personaId]);

    const renderContent = () => {
        if (loading) return <div>⏳ Loading...</div>;
        if (!persona) return <div>❌ Persona not found</div>;

        switch (activeSection) {
            case "Templates":
                return <Templates />;
            case "Marketing Strategy":
                return <MarketingStrategy persona={persona} />;
            case "SEO Plan":
                return <SEOPlan persona={persona} />;
            case "Blog Posts":
                return <BlogContainer persona={persona} />;
            case "Content Calendar":
                return <ContentCalendar persona={persona} />;
            default:
                return <div>🔧 Select a section</div>;
        }
    };

    return (
        <div className="flex h-screen bg-[#0f0f0f] text-white overflow-hidden">
            {/* Sidebar (fixed) */}
            <div
                className={cn(
                    "flex-shrink-0 h-screen overflow-y-auto bg-[#1a1a1a] border-r border-gray-800 transition-all duration-300",
                    isOpen ? "w-64" : "w-16",
                    "sticky top-0"
                )}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <span
                        className={`font-bold text-lg ${!isOpen && "hidden"}`}
                    >
                        HeadSpark
                    </span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                        <Boxes className="w-5 h-5 text-gray-300" />
                        <span className="text-sm font-medium">
                            {loading
                                ? "Loading..."
                                : persona?.name || "Unknown Persona"}
                        </span>
                    </div>
                )}

                <div className="p-4 space-y-2">
                    <SidebarLink
                        label="Templates"
                        Icon={AppWindow}
                        isOpen={isOpen}
                        onClick={() => setActiveSection("Templates")}
                        active={activeSection === "Templates"}
                    />
                    {isOpen && (
                        <div className="mt-6">
                            <p className="text-xs text-blue-500 font-semibold mb-2 uppercase tracking-wide">
                                Tools
                            </p>
                        </div>
                    )}
                    <SidebarLink
                        label="Marketing Strategy"
                        Icon={BarChart3}
                        isOpen={isOpen}
                        onClick={() => setActiveSection("Marketing Strategy")}
                        active={activeSection === "Marketing Strategy"}
                    />
                    <SidebarLink
                        label="SEO Plan"
                        Icon={Search}
                        isOpen={isOpen}
                        onClick={() => setActiveSection("SEO Plan")}
                        active={activeSection === "SEO Plan"}
                    />
                    <SidebarLink
                        label="Blog Posts"
                        Icon={Newspaper}
                        isOpen={isOpen}
                        onClick={() => setActiveSection("Blog Posts")}
                        active={activeSection === "Blog Posts"}
                    />
                    <SidebarLink
                        label="Content Calendar"
                        Icon={CalendarDays}
                        isOpen={isOpen}
                        onClick={() => setActiveSection("Content Calendar")}
                        active={activeSection === "Content Calendar"}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-y-auto">
                <nav className="w-full bg-[#0f0f0f] border-b border-gray-800 text-white px-6 py-2 flex items-center justify-between shadow sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Box className="w-5 h-5 text-gray-300" />
                            <span className="text-lg font-semibold">
                                {persona?.name || "Workspace"}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full border border-gray-300 text-gray-300">
                                Free
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <ExpandedTabs
                            tabs={[
                                { title: "Dashboard", icon: Home },
                                { title: "Notifications", icon: Bell },
                                { type: "separator" },
                                { title: "Profile", icon: User },
                                { title: "Support", icon: HelpCircle },
                                { title: "Security", icon: Shield },
                            ]}
                            activeColor="text-blue-500"
                            onChange={(index) =>
                                console.log("Tab changed to:", index)
                            }
                        />
                    </div>
                </nav>

                <div className="flex-1 p-6">{renderContent()}</div>
            </div>
        </div>
    );
}

function SidebarLink({ label, Icon, isOpen, onClick, active }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group flex items-center w-full px-3 py-2 rounded-md transition-colors",
                active
                    ? "bg-gray-800 text-blue-500"
                    : "hover:bg-gray-800 hover:text-blue-500"
            )}
        >
            <div className="w-8 h-8 flex items-center justify-center rounded-md">
                <Icon
                    className={cn(
                        "w-5 h-5",
                        active
                            ? "text-blue-500"
                            : "text-gray-300 group-hover:text-blue-500"
                    )}
                />
            </div>
            {isOpen && (
                <span
                    className={cn(
                        "ml-2 text-[15px] font-medium",
                        active
                            ? "text-blue-500"
                            : "text-gray-300 group-hover:text-blue-500"
                    )}
                >
                    {label}
                </span>
            )}
        </button>
    );
}
