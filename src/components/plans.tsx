"use client";

import React, { useEffect, useState } from "react";
import { getAllPlans, deletePlan, updatePlan } from "@/lib/action"; // Import updatePlan
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { planSchema } from "@/lib/schemas";
export default function PlansData() {
  const [plans, setPlans] = useState<
    { id: number; name: string; description: string | null; duration: number; amount: number }[]
  >([]);
  const [editPlan, setEditPlan] = useState<
    { id: number; name: string; description: string | null; duration: number; amount: number } | null
  >(null);

  // Fetch plans initially
  useEffect(() => {
    const fetchPlans = async () => {
      const fetchedPlans = await getAllPlans();
      setPlans(fetchedPlans);
    };
    fetchPlans();
  }, []);

  // Delete plan handler
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this plan?");
    if (!confirmDelete) return;

    try {
      await deletePlan({ id }); // Call delete API
      setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id)); // Update state
      toast.success("Plan deleted successfully");
    } catch (error) {
      console.error("Error deleting plan:", error);
      alert("Failed to delete the plan. Please try again.");
    }
  };

  // Update plan handler
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPlan) return;

    try {
      await updatePlan({id: editPlan.id, name: editPlan.name, description: editPlan.description, duration: editPlan.duration, amount: editPlan.amount }); // Call update API
      setPlans((prevPlans) =>
        prevPlans.map((plan) =>
          plan.id === editPlan.id ? { ...editPlan } : plan
        )
      ); // Update state
      setEditPlan(null); // Reset edit mode
      toast.success("Plan updated successfully");
    } catch (error) {
      console.error("Error updating plan:", error);
      alert("Failed to update the plan. Please try again.");
    }
  };

  return (
    <div>
      {/* Display the table */}
      <Table>
        <TableCaption>A list of your recent plans.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Shift</TableHead>
            <TableHead>Days</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.duration}</TableCell>
              <TableCell>{plan.description}</TableCell>
              <TableCell>{plan.amount}</TableCell>
              <TableCell className="text-right space-x-2">
                <button
                  onClick={() => setEditPlan(plan)} // Set the plan to be edited
                  className="text-blue-500 hover:text-blue-700"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(plan.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Display the edit form if a plan is being edited */}
      {editPlan && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4 p-4 border rounded-md">
          <h3 className="text-lg font-semibold">Edit Plan</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              value={editPlan.name}
              onChange={(e) =>
                setEditPlan((prev) => prev && { ...prev, name: e.target.value })
              }
              className="input"
              placeholder="Shift Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Input
              type="text"
              value={editPlan.description || ""}
              onChange={(e) =>
                setEditPlan((prev) => prev && { ...prev, description: e.target.value })
              }
              className="input"
              placeholder="Optional description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (in days)</label>
            <Input
              type="number"
              value={editPlan.duration}
              onChange={(e) =>
                setEditPlan((prev) => prev && { ...prev, duration: Number(e.target.value) })
              }
              className="input"
              placeholder="Duration in days"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <Input
              type="number"
              value={editPlan.amount}
              onChange={(e) =>
                setEditPlan((prev) => prev && { ...prev, amount: Number(e.target.value) })
              }
              className="input"
              placeholder="Amount"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              onClick={() => setEditPlan(null)} // Cancel edit
              variant="secondary"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500 text-white">
              Save Changes
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
