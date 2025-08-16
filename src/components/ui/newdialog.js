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
import { FilePlus } from "lucide-react";
import APIService from "@/services/api";

export default function NewProjectDialog() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      // map frontend fields -> backend fields
      const response = await APIService.personas.create({
        title: productName,
        detailed_description: description,
      });

      console.log("Created successfully:", response);

      // reset form after success
      setProductName("");
      setDescription("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while creating the project.");
    } finally {
      setLoading(false);
    }
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
            <label className="block text-sm font-medium">
              Product Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-md bg-[hsl(240,3.7%,10%)] text-white border border-[hsl(240,3.7%,25%)] focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="What does your product do?"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <button
              className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600"
              disabled={loading}
            >
              Cancel
            </button>
          </DialogClose>
          <DialogClose asChild>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md text-white bg-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,63.3%)]"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </DialogClose>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
