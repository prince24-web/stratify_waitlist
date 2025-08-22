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
import { ExpandedTabs } from "../../components/ui/expanded-tabs";
import { cn } from "../../lib/utils";
import MarketingStrategy from "../components/pages/marketingStrategy";
import SEOPlan from "../components/pages/SEOplans";
import BlogContainer from "../components/pages/Blogpost";
import ContentCalendar from "../components/pages/ContentCalender";
import APIService from "../../services/api";

// Dummy component for templates
function Templates() {
  return <div>📦 Here are your Templates</div>;
}

export default function Workspace() {
  const searchParams = useSearchParams();
  const personaId = searchParams.get("persona");

  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [persona, setPersona] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch persona
  useEffect(() => {
    if (!personaId) return;

    const fetchPersona = async () => {
      try {
        const res = await APIService.personas.getOne(personaId);
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
    if (loading) return <div className="p-6">⏳ Loading...</div>;
    if (!persona) return <div className="p-6">❌ Persona not found</div>;

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
        return <div className="p-6">🔧 Select a section</div>;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={cn(
          "flex-shrink-0 h-screen bg-[#141414] border-r border-gray-800 transition-all duration-300 flex flex-col",
          isOpen ? "w-64" : "w-16"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {isOpen && <span className="font-bold text-lg">Stratify</span>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-gray-200 transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Persona */}
        {isOpen && (
          <div className="flex items-center gap-2 p-4 border-b border-gray-800">
            <Boxes className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium truncate">
              {loading ? "Loading..." : persona?.name || "Unknown Persona"}
            </span>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 p-3 space-y-1 overflow-y-auto">
          <SidebarLink
            label="Templates"
            Icon={AppWindow}
            isOpen={isOpen}
            onClick={() => setActiveSection("Templates")}
            active={activeSection === "Templates"}
          />

          {isOpen && (
            <p className="px-3 pt-4 pb-1 text-xs text-gray-500 uppercase tracking-wide">
              Tools
            </p>
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
        {/* Top Navbar */}
        <nav className="w-full bg-[#0f0f0f] border-b border-gray-800 px-6 py-2 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-gray-400" />
            <span className="text-lg font-semibold">
              {persona?.name || "Workspace"}
            </span>
            <span className="px-2 py-1 text-xs rounded-full border border-gray-700 text-gray-400">
              Free
            </span>
          </div>

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
            onChange={(index) => console.log("Tab changed to:", index)}
          />
        </nav>

        {/* Dynamic Page */}
        <div className="flex-1 overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
}

function SidebarLink({ label, Icon, isOpen, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center w-full px-3 py-2 rounded-md transition",
        active
          ? "bg-blue-600/10 text-blue-500"
          : "hover:bg-gray-800 hover:text-blue-400 text-gray-300"
      )}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <Icon
          className={cn(
            "w-5 h-5",
            active
              ? "text-blue-500"
              : "text-gray-400 group-hover:text-blue-400"
          )}
        />
      </div>
      {isOpen && (
        <span
          className={cn(
            "ml-3 text-sm font-medium",
            active
              ? "text-blue-500"
              : "text-gray-300 group-hover:text-blue-400"
          )}
        >
          {label}
        </span>
      )}
    </button>
  );
}
