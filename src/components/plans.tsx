"use client"; 

import React, { useEffect, useState } from "react";
import { getAllPlans, deletePlan } from "@/lib/action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import toast from "react-hot-toast";

export default function PlansData() {
  const [plans, setPlans] = useState<
    { id: number; name: string; description: string | null; duration: number; amount: number }[]
  >([]);

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
      await deletePlan({id}); // Call delete API
      setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id)); // Update state
      toast.success("Plan deleted successfully");
    } catch (error) {
      console.error("Error deleting plan:", error);
      alert("Failed to delete the plan. Please try again.");
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Shift</TableHead>
            <TableHead>Days</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.duration}</TableCell>
              <TableCell>{plan.description}</TableCell>
              <TableCell className="">{plan.amount}</TableCell>
              <TableCell className="text-right">
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
    </div>
  );
}
