"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import APIService from "@/services/api";

export default function UserDashboard() {
    const router = useRouter();

    const [projects, setProjects] = useState([]);
    const [editProject, setEditProject] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    // ✅ Fetch personas from API on mount
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await APIService.personas.getAll();
                // API returns { status, data: { msg, personas: [] } }
                setProjects(res.data.personas || []);
            } catch (err) {
                console.error("Failed to fetch personas:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        try {
            await APIService.personas.remove(id);
            setProjects((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error("Failed to delete persona:", err);
        }
    };

    const handleEditSave = async () => {
        try {
            await APIService.personas.update(editProject.id, {
                name: editProject.name,
                short_description: editProject.short_description,
                tone: editProject.tone,
            });
            setProjects((prev) =>
                prev.map((p) => (p.id === editProject.id ? editProject : p))
            );
            setEditProject(null);
        } catch (err) {
            console.error("Failed to update persona:", err);
        }
    };

    const handleOpen = (id) => {
        // Navigate with persona ID instead of name
        router.push(`/dashboard?persona=${id}`);
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

                {/* Loader */}
                {loading && (
                    <p className="text-gray-500 text-center">
                        Loading projects...
                    </p>
                )}

                {/* Project Grid */}
                {!loading && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => handleOpen(project.id)}
                                className="bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800 hover:border-gray-700 transition-colors p-5 flex flex-col justify-between relative cursor-pointer"
                            >
                                {/* Arrow in top-right */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpen(project.id);
                                    }}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <ArrowRight size={18} />
                                </button>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {project.name}
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-2">
                                        {project.short_description}
                                    </p>
                                    {project.tone && (
                                        <p className="text-gray-500 text-xs mt-1">
                                            <span className="font-medium">
                                                Tone:
                                            </span>{" "}
                                            {project.tone}
                                        </p>
                                    )}
                                </div>

                                {/* Edit + Delete */}
                                <div className="flex justify-start gap-3 mt-4">
                                    {/* Edit */}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setEditProject({
                                                        ...project,
                                                    });
                                                }}
                                                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="bg-[#1a1a1a] text-white border border-gray-800">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Edit Project
                                                </DialogTitle>
                                            </DialogHeader>
                                            {editProject && (
                                                <div className="space-y-4 mt-4">
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={
                                                                editProject.name
                                                            }
                                                            onChange={(e) =>
                                                                setEditProject(
                                                                    (prev) => ({
                                                                        ...prev,
                                                                        name: e
                                                                            .target
                                                                            .value,
                                                                    })
                                                                )
                                                            }
                                                            className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md px-3 py-2 text-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Description
                                                        </label>
                                                        <textarea
                                                            value={
                                                                editProject.short_description
                                                            }
                                                            onChange={(e) =>
                                                                setEditProject(
                                                                    (prev) => ({
                                                                        ...prev,
                                                                        short_description:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    })
                                                                )
                                                            }
                                                            className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md px-3 py-2 text-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Tone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={
                                                                editProject.tone ||
                                                                ""
                                                            }
                                                            onChange={(e) =>
                                                                setEditProject(
                                                                    (prev) => ({
                                                                        ...prev,
                                                                        tone: e
                                                                            .target
                                                                            .value,
                                                                    })
                                                                )
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

                        {filteredProjects.length === 0 && !loading && (
                            <p className="text-gray-500 col-span-full text-center">
                                No projects found.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
