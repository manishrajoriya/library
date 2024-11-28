"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMember } from "@/lib/action";
import { Input } from "../ui/input";
import { memberSchema, memberSchemaType } from "@/lib/schemas";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

type Plan = {
  id: number;
  name: string;
};

type PlanFormProps = {
  plans: Plan[];
};

export default function MemberForm({ plans }: PlanFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<memberSchemaType>({
    resolver: zodResolver(memberSchema),
  });

  const onSubmit = (data: memberSchemaType) => {
    createMember({ data });
    if (errors) {
      toast.error("Error in adding member");
      console.log(errors);
    } else {
      toast.success("Member added successfully");
    }
  };

  return (
    <div className="flex justify-center w-full px-4 sm:w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 shadow-md rounded-lg w-full"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            type="text"
            {...register("name")}
            placeholder="Full Name"
            className="input"
            required
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <Input
            type="text"
            {...register("address")}
            placeholder="Address"
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Number
          </label>
          <Input
            type="text"
            {...register("contactNumber")}
            placeholder="Contact Number"
            className="input"
            required
          />
          {errors.contactNumber && (
            <p className="text-xs text-red-500 mt-1">
              {errors.contactNumber.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="input"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plan
          </label>
          <select
            {...register("planId", { valueAsNumber: true })}
            className="input h-10"
            required
          >
            <option value="">Select Plan</option>
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
          {errors.planId && (
            <p className="text-xs text-red-500 mt-1">{errors.planId.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admission Date
            </label>
            <Input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              {...register("addmissionDate")}
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <Input
              type="date"
              defaultValue={new Date(
                Date.now() + 30 * 24 * 60 * 60 * 1000
              ).toISOString().split("T")[0]}
              {...register("expiryDate")}
              className="input"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select {...register("status")} required className="input h-10">
            <option value="LIVE">Live</option>
            <option value="EXPIRED">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Seat Number
          </label>
          <Input
            type="number"
            {...register("seatNumber")}
            placeholder="Seat Number"
            className="input"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Amount
            </label>
            <Input
              type="number"
              {...register("totalAmount")}
              placeholder="Total Amount"
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paid Amount
            </label>
            <Input
              type="number"
              {...register("amountPaid")}
              placeholder="Paid Amount"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Amount
            </label>
            <Input
              type="number"
              {...register("dueAmount")}
              placeholder="Due Amount"
              className="input"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image URL
          </label>
          <Input
            type="url"
            {...register("profileImage")}
            placeholder="Profile Image URL"
            className="input"
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
