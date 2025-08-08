"use client";

import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
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
} from "lucide-react";

import NewProjectDialog from "@/components/ui/newdialog";
import { ExpandedTabs } from "@/components/ui/expanded-tabs";
import { cn } from "@/lib/utils";
import CustomTable from "../components/CustomTable";

// Placeholder components for different views
function Dashboard() {
  return <div>📊 This is the Dashboard</div>;
}

function Templates() {
  return <div>📦 Here are your Templates</div>;
}

function SEOPlan() {
  return <div>🔍 SEO Plan section</div>;
}

function MarketingStrategy() {
  return <div>📈 Marketing Strategy</div>;
}

function BlogPosts() {
  return <div>📝 Blog Posts</div>;
}

function ContentCalendar() {
  return <div>📅 Content Calendar</div>;
}

export default function Workspace() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <CustomTable />;
      case "Templates":
        return <Templates />;
      case "SEO Plan":
        return <SEOPlan />;
      case "Marketing Strategy":
        return <MarketingStrategy />;
      case "Blog Posts":
        return <BlogPosts />;
      case "Content Calendar":
        return <ContentCalendar />;
      default:
        return <div>🔧 Select a section</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } bg-black/70 backdrop-blur-md border-r border-white/10 shadow-xl`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className={`font-bold text-lg ${!isOpen && "hidden"}`}>
            HeadStart
          </span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="p-4 space-y-2">
          {/* Main Links */}
          <SidebarLink
            label="Dashboard"
            Icon={LayoutDashboard}
            isOpen={isOpen}
            onClick={() => setActiveSection("Dashboard")}
            active={activeSection === "Dashboard"}
          />
          <SidebarLink
            label="Templates"
            Icon={AppWindow}
            isOpen={isOpen}
            onClick={() => setActiveSection("Templates")}
            active={activeSection === "Templates"}
          />

          {/* Tools Section */}
          {isOpen && (
            <div className="mt-6">
              <p className="text-xs text-blue-500 font-semibold mb-2 uppercase tracking-wide">
                Tools
              </p>
            </div>
          )}

          <SidebarLink
            label="SEO Plan"
            Icon={Search}
            isOpen={isOpen}
            onClick={() => setActiveSection("SEO Plan")}
            active={activeSection === "SEO Plan"}
          />
          <SidebarLink
            label="Marketing Strategy"
            Icon={BarChart3}
            isOpen={isOpen}
            onClick={() => setActiveSection("Marketing Strategy")}
            active={activeSection === "Marketing Strategy"}
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
      <div className="flex-1 flex flex-col bg-[#09090b] text-white">
        {/* Navbar */}
        <nav className="relative w-full h-16 px-6 flex items-center border-b border-white/10 shadow-md ">
          <NewProjectDialog />
          <div className="absolute left-1/2 -translate-x-1/2">
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
              onChange={(index) => {
                console.log("Tab changed to:", index);
              }}
            />
          </div>
        </nav>

        {/* Workspace content area */}
        <div className="flex-1 p-6">{renderContent()}</div>
      </div>
    </div>
  );
}

// Sidebar link component
function SidebarLink({ label, Icon, isOpen, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center w-full px-3 py-2 rounded-md transition-colors",
        active ? "bg-white/10 text-blue-500" : "hover:bg-white/5"
      )}
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-md transition-colors">
        <Icon
          className={cn(
            "w-5 h-5",
            active ? "text-blue-500" : "text-white group-hover:text-blue-500"
          )}
        />
      </div>
      {isOpen && (
        <span
          className={cn(
            "ml-2 text-[15px] font-medium leading-none transition-colors",
            active ? "text-blue-500" : "text-white group-hover:text-blue-500"
          )}
        >
          {label}
        </span>
      )}
    </button>
  );
}
