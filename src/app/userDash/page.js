"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // for navigation
import { Pencil, Trash2, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import DashboardNav from "../components/dashboard";
import NewProjectDialog from "@/components/ui/newdialog";

export default function UserDashboard() {
  const router = useRouter();

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Social Media Campaign",
      description: "Marketing plan for Instagram reels.",
      tone: "Playful",
    },
    {
      id: 2,
      name: "SEO Optimization",
      description: "Full keyword and backlink strategy.",
      tone: "Professional",
    },
    {
      id: 3,
      name: "Product Launch Emails",
      description: "Series of emails for product launch.",
      tone: "Excited",
    },
  ]);

  const [editProject, setEditProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleEditSave = () => {
    setProjects((prev) =>
      prev.map((p) => (p.id === editProject.id ? editProject : p))
    );
    setEditProject(null);
  };

  const handleOpen = (projectName) => {
    // Navigate to /dashboard with project name in query params
    router.push(`/dashboard?project=${encodeURIComponent(projectName)}`);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <DashboardNav />
      <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <NewProjectDialog />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 text-white w-full sm:w-64 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpen(project.name)} // ✅ container click navigates
              className="bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800 hover:border-gray-700 transition-colors p-5 flex flex-col justify-between relative cursor-pointer"
            >
              {/* Arrow in top-right */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent container click
                  handleOpen(project.name);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowRight size={18} />
              </button>

              <div>
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                <p className="text-gray-500 text-xs mt-1">
                  <span className="font-medium">Tone:</span> {project.tone}
                </p>
              </div>

              {/* Edit + Delete */}
              <div className="flex justify-start gap-3 mt-4">
                {/* Edit */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditProject({ ...project });
                      }}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <Pencil size={16} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#1a1a1a] text-white border border-gray-800">
                    <DialogHeader>
                      <DialogTitle>Edit Project</DialogTitle>
                    </DialogHeader>
                    {editProject && (
                      <div className="space-y-4 mt-4">
                        <div>
                          <label className="block text-sm mb-1">Name</label>
                          <input
                            type="text"
                            value={editProject.name}
                            onChange={(e) =>
                              setEditProject((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Description</label>
                          <textarea
                            value={editProject.description}
                            onChange={(e) =>
                              setEditProject((prev) => ({
                                ...prev,
                                description: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Tone</label>
                          <input
                            type="text"
                            value={editProject.tone}
                            onChange={(e) =>
                              setEditProject((prev) => ({
                                ...prev,
                                tone: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                      </div>
                    )}
                    <DialogFooter className="mt-6">
                      <DialogClose asChild>
                        <button
                          onClick={handleEditSave}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
                        >
                          Save
                        </button>
                      </DialogClose>
                      <DialogClose asChild>
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md">
                          Cancel
                        </button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Delete */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(project.id);
                  }}
                  className="p-2 rounded-lg bg-red-900 hover:bg-red-800 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
