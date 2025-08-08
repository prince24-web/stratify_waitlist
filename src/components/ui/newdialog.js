"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronDown, FilePlus } from "lucide-react";

export default function NewProjectDialog() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("Select tone");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toneOptions = [
    "Professional",
    "Friendly",
    "Witty",
    "Casual",
    "Authoritative",
  ];

  const handleSubmit = () => {
    const data = {
      productName,
      description,
      audience,
      tone,
    };
    console.log("Collected data:", data);
  };

  const handleToneSelect = (selectedTone) => {
    setTone(selectedTone);
    setIsDropdownOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger className="px-4 py-2 rounded-md text-white bg-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,63.3%)]">
        <FilePlus className="w-5 h-5 inline mr-2" />
        New Project
      </DialogTrigger>

      <DialogContent className="bg-[hsl(240,3.7%,15.9%)] text-white border border-[hsl(240,3.7%,25%)]">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-md bg-[hsl(240,3.7%,10%)] text-white border border-[hsl(240,3.7%,25%)] focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="e.g. PrepPal"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Product Description</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-md bg-[hsl(240,3.7%,10%)] text-white border border-[hsl(240,3.7%,25%)] focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="What does your product do?"
            />
          </div>

          {/* Audience */}
          <div>
            <label className="block text-sm font-medium">Target Audience</label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-md bg-[hsl(240,3.7%,10%)] text-white border border-[hsl(240,3.7%,25%)] focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="e.g. busy college students"
            />
          </div>

          {/* Tone Dropdown */}
          <div className="relative">
            <label className="block text-white font-medium mb-3">Tone</label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 bg-[hsl(240,3.7%,10%)] border border-[hsl(240,3.7%,25%)] rounded-md text-left text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 flex items-center justify-between"
              >
                <span className={tone === "Select tone" ? "text-cyan-300/70" : "text-white"}>
                  {tone}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-300 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[hsl(240,3.7%,13%)] border border-[hsl(240,3.7%,25%)] rounded-md shadow-xl z-20 overflow-hidden">
                  {toneOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleToneSelect(option)}
                      className="w-full px-4 py-3 text-left text-white hover:bg-[hsl(240,3.7%,20%)] transition-colors duration-200 border-b border-white/10 last:border-b-0"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <button className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600">
              Cancel
            </button>
          </DialogClose>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md text-white bg-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,63.3%)] "
          >
            Create
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
