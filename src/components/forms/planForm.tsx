"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { planSchemaType, planSchema } from "@/lib/schemas";
import { createPlan } from "@/lib/action";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function PlanForm() {
  // Initialize the form with Zod schema validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<planSchemaType>({
    resolver: zodResolver(planSchema),
  });

  const onSubmit = (data: planSchemaType) => {
    createPlan({ data });
    setTimeout(() => {
      window.location.reload(); // Refresh the page to load new data
    }, 1000);
  };

  return (
    <div className="flex  justify-center w-full ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        {/* Name Field */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            type="text"
            {...register("name")}
            className="input"
            placeholder="Shift Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            {...register("description")}
            className="input"
            placeholder="Optional description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Duration Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration (in days)
          </label>
          <Input
            type="number"
            {...register("duration", { valueAsNumber: true })}
            className="input"
            placeholder="Duration in days"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        {/* Amount Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <Input
            type="number"
            step="100"
            {...register("amount", { valueAsNumber: true })}
            placeholder="Amount"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm">{errors.amount.message}</p>
          )}
        </div>
      </div>
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default PlanForm;
