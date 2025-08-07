"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import NewProjectDialog from "@/components/ui/newdialog";

export default function Workspace() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } bg-white/5 backdrop-blur-md border-r border-white/10 shadow-xl`}
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
          <NewProjectDialog/>
          <SidebarLink
            label="Dashboard"
            icon="/image/dashboard.png"
            isOpen={isOpen}
          />
          <SidebarLink
            label="Templates"
            icon="/image/windows.png"
            isOpen={isOpen}
          />

          {/* Tools Section */}
          {isOpen && (
            <div className="mt-6">
              <p className="text-xs text-[hsl(221.2,83.2%,53.3%)] font-semibold mb-2 uppercase tracking-wide">
                Tools
              </p>
            </div>
          )}

          <SidebarLink
            label="SEO Plan"
            icon="/image/seo.png"
            isOpen={isOpen}
          />
          <SidebarLink
            label="Marketing Strategy"
            icon="/image/market.png"
            isOpen={isOpen}
          />
          <SidebarLink
            label="Blog Posts"
            icon="/image/blog.png"
            isOpen={isOpen}
          />
          <SidebarLink
            label="Content Calendar"
            icon="/image/calendar.png"
            isOpen={isOpen}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Workspace content goes here */}
      </div>
    </div>
  );
}

// Sidebar link component
export function SidebarLink({ label, icon, isOpen }) {
  return (
    <button
      className={`group flex items-center w-full px-3 py-2 rounded-md transition-colors ${
        isOpen ? "hover:bg-white/10" : ""
      }`}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
          !isOpen ? "hover:bg-white/10" : ""
        }`}
      >
        <div className="w-6 h-6 relative">
          <Image src={icon} alt={label} fill className="object-contain" />
        </div>
      </div>
      {isOpen && <span className="ml-3 text-sm">{label}</span>}
    </button>
  );
}