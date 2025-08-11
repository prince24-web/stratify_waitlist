import { ExpandedTabs } from "@/components/ui/expanded-tabs";
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
export default function DashboardNav() {
  return (
    <nav className="w-full  bg-[#0f0f0f]  border-b border-gray-800 text-white px-6 py-4 flex items-center justify-between shadow">
      {/* Logo / Brand */}
      <div className="text-lg font-semibold">MyApp</div>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-gray-300 transition-colors">
          Dashboard
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          Projects
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          Settings
        </a>
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
  );
}
