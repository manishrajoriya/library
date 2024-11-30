"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMember, getAllPlans, getPlanAmount, getSeatNumber } from "@/lib/action";
import { Input } from "../ui/input";
import { memberSchema, memberSchemaType } from "@/lib/schemas";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

type Plan = {
  id: number;
  name: string;
  amount: number;
};

export default function MemberForm() {
  const [seatNumber, setSeatNumber] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<memberSchemaType>({
    resolver: zodResolver(memberSchema),
  });

  const selectedPlanId = watch("planId");

  const fetchSeatNumber = async () => {
    setLoading(true);
    const response = await getSeatNumber();
    if (response.success) {
      setSeatNumber(response.seatNumber || null);
    } else {
      toast.error("Failed to fetch seat number.");
    }
    setLoading(false);
  };

  const fetchPlans = async () => {
    setLoading(true);
    const response = await getAllPlans();
    if (response.success) {
      setPlans(response.plans || []);
    } else {
      toast.error("Failed to fetch plans.");
    }
    setLoading(false);
  };

  const fetchPlanAmount = async (id: number) => {
    setLoading(true);
    const response = await getPlanAmount({ id });
    if (response.success) {
      setAmount(response.amount?.amount || null);
      setValue("totalAmount", response.amount?.amount || 0); // Update form value
    } else {
      toast.error("Failed to fetch plan amount.");
    }
    setLoading(false);
  };

  const handleImageUpload = (result: any) => {
    if (result.event === "success") {
      toast.success("Image uploaded successfully!");
      setProfileImage(result.info.secure_url);
    }
  };

  useEffect(() => {
    fetchSeatNumber();
    fetchPlans();
  }, []);

  useEffect(() => {
    if (selectedPlanId) {
      fetchPlanAmount(Number(selectedPlanId));
    }
  }, [selectedPlanId]);

  const onSubmit = async (data: memberSchemaType) => {
    setLoading(true);
    const response = await createMember({ data });
    if (response.success) {
      toast.success("Member created successfully!");
    } else {
      toast.error("Failed to create member.");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center w-full px-4 sm:w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 shadow-md rounded-lg w-full"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input {...register("name")} placeholder="Full Name" className="input shadow-sm shadow-green-100" required />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <Input {...register("address")} placeholder="Address" className="input shadow-sm shadow-green-100" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
          <Input {...register("contactNumber")} placeholder="Contact Number" className="input shadow-sm shadow-green-100" required />
          {errors.contactNumber && <p className="text-xs text-red-500 mt-1">{errors.contactNumber.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input {...register("email")} placeholder="Email" className="input shadow-sm shadow-green-100" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Plan</label>
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
          {errors.planId && <p className="text-xs text-red-500 mt-1">{errors.planId.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Amount</label>
            <Input type="number" {...register("totalAmount")} value={amount || ""} readOnly required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paid Amount</label>
            <Input
              type="number"
              {...register("amountPaid", { valueAsNumber: true })}
              onChange={(e) => setValue("dueAmount", (amount || 0) - Number(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Amount</label>
            <Input type="number" {...register("dueAmount")} readOnly />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Admission Date</label>
          <Input
            type="date"
            {...register("addmissionDate")}
            defaultValue={new Date().toISOString().split("T")[0]}
            className="input shadow-sm shadow-green-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <Input
            type="date"
            {...register("expiryDate")}
            defaultValue={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
            className="input shadow-sm shadow-green-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select {...register("status")} className="input h-10" required>
            <option value="LIVE">Live</option>
            <option value="EXPIRED">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Seat Number</label>
          <Input {...register("seatNumber")} value={seatNumber || ""}  required />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          <CldUploadWidget onUpload={handleImageUpload}>
            {({ open }) => (
              <Button type="button" onClick={open}>
                Upload Image
              </Button>
            )}
          </CldUploadWidget>
          {profileImage && <img src={profileImage} alt="Profile" className="mt-2 w-20 h-20" />}
        </div> */}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
