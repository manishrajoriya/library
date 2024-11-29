"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMember, getAllPlans, getPlanAmount, getSeatNumber, uploadOnCloudinary } from "@/lib/action";
import { Input } from "../ui/input";
import { memberSchema, memberSchemaType, planSchema, planSchemaType } from "@/lib/schemas";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import {  useEffect, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';

// type Plan = {
//   id: number;
//   name: string;
// };
type Plan = {
  id: number;
  name: string;
  description: string | null;
  duration: number;
  amount: number;
  createdAt: Date;
  adminId: string | null;
};

type PlanFormProps = {
  plans: planSchemaType[];
};

export default function MemberForm() {
  const [seatNumber, setSeatNumber] = useState( 0 );
  const [amount, setAmount] = useState( {amount:0} );
  const [plan, setPlan] = useState<Plan[]>([]);
  const [profileImage, setProfileImage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<memberSchemaType>({
    resolver: zodResolver(memberSchema),
  });

  const onSubmit = async (data: memberSchemaType) => {
    
   const response = await createMember( {data} );
   if (!response.success) {
     toast.error("Failed to create member. Please try again.");
     console.log(response.message);
     
   }else {
     toast.success("Member created successfully!");
   }

  };

  // const uploadFile = async (file: File) => {
    
  //   if (!file) {
  //     console.error("No file selected");
  //     toast.error("No file selected");
  //     return;
  //   }
  //     const response = await uploadOnCloudinary(file);
  //     if (!response.success) {
  //       toast.error("Failed to upload file. Please try again.");
  //       console.log(response.message);
  //       return;
      
  //     } else {
  //       toast.success("File uploaded successfully!");
  //     }
    
  // };

  const checkSeatNumber = async () => {
    const response = await getSeatNumber();
    if (!response.success) {
      toast.error("Failed to get seat number. Please try again.");
      console.log(response.message);
    }else {
      console.log("seat number",response.seatNumber);
      setSeatNumber(response.seatNumber!);
    }
  }

  const checkPlan = async () => {
    const response = await getAllPlans();
    if (!response.success) {
      toast.error("Failed to get plan. Please try again.");
      console.log(response.message);
    }else {
      console.log("plan",response.plans);
      setPlan(response.plans!);
    }
  }

  const checkPlanAmount = async (id:number) => {
    const response = await getPlanAmount({id});
    if (!response.success) {
      toast.error("Failed to get seat number. Please try again.");
      console.log(response.message);
    }else {
      console.log("amount",response.amount);
      setAmount(response.amount!);
    }
  }

  useEffect(() => {
    checkSeatNumber();
    checkPlan();
  },[]);
  

  return (
    <div className="flex justify-center w-full  px-4 sm:w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 shadow-md rounded-lg w-full"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ">
            Name
          </label>
          <Input
            type="text"
            {...register("name")}
            placeholder="Full Name"
            className="input shadow-sm shadow-green-100"
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
            className="input shadow-sm shadow-green-100"
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
            className="input shadow-sm shadow-green-100"
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
            className="input shadow-sm shadow-green-100"
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
           
            onChange={(e) => checkPlanAmount(Number(e.target.value))}
          >
            {plan.map((plan) => (
              <option key={plan.id} value={plan.id} >
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
              className="input shadow-sm shadow-green-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <Input
              type="date"
              required
              defaultValue={new Date(
                Date.now() + 30 * 24 * 60 * 60 * 1000
              ).toISOString().split("T")[0]}
              {...register("expiryDate")}
              className="input shadow-sm shadow-green-100"
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
            className="input shadow-sm shadow-green-100"
            defaultValue={seatNumber}
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
              className="input shadow-sm shadow-green-100"
              defaultValue={amount.amount? amount.amount : plan.map((plan) => plan.amount)[0]}
              required
              readOnly
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
              className="input shadow-sm shadow-green-100"
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
              className="input shadow-sm shadow-green-100"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image URL
          </label>
          <Input
            type="file"
            {...register("profileImage")}
            placeholder="Profile Image URL"
            className="input shadow-sm shadow-green-100"
          
          />
        
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}


