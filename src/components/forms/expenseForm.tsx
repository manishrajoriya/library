"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema, expenseSchemaType } from "@/lib/schemas";
import { createExpense } from "@/lib/action";
import { Router } from "next/router";


const ExpenseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<expenseSchemaType>({
    resolver: zodResolver(expenseSchema), // Integrate Zod with React Hook Form
  });

  const onSubmit = (data: expenseSchemaType) => {
    console.log("Form Submitted:", data);
    createExpense({ data });
    setTimeout(() => {
         window.location.reload(); // Refresh the page to load new data
      }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
       {/* Amount Field */}
      <div>
        <label htmlFor="amount" className="block text-sm font-medium">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          step="0.01"
          {...register("amount")}
          className="mt-1 block w-full rounded border-gray-300"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </div>

      {/* Description Field */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <input
          id="description"
          type="text"
          {...register("description")}
          className="mt-1 block w-full rounded border-gray-300"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

     

      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium">
          Date
        </label>
        <input
          id="date"
          type="date"
          defaultValue={new Date().toISOString().split("T")[0]}
          {...register("date")}
          className="mt-1 block w-full rounded border-gray-300"
        />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
