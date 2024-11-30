"use client";
import React, { useEffect, useState } from "react";
import MemberCard2 from "./v0card";

import { getAllMembers, getAllPlans } from "@/lib/action";
import toast from "react-hot-toast";
import { memberSchemaType, planSchemaType } from "@/lib/schemas";

export function StudentCard() {
  const [members, setMembers] = React.useState<memberSchemaType[]>([]);
  const [plans, setPlans] = React.useState<planSchemaType[]>([]);
  const [loading, setLoading] = React.useState(true);

  const getMembers = async () => {
    try {
      const response = await getAllMembers();
      console.log("members", response.members);
      if (!response.success || !response.members) {
        throw new Error("Failed to fetch members");
      }
      setMembers(response.members || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch members. Please try again.");
    }
  };

  const getPlans = async () => {
    try {
      const response = await getAllPlans();
      console.log("plans", response.plans);
      if (!response.success || !response.plans) {
        throw new Error("Failed to fetch plans");
      }
      setPlans(response.plans || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch plans. Please try again.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getPlans(), getMembers()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : members.length === 0 ? (
        <div>No members found.</div>
      ) : (
        members.map((member: memberSchemaType) => (
          <div key={member.id}>
            <MemberCard2
              name={member.name}
              address={member.address || ""}
              contactNumber={member.contactNumber}
              addmissionDate={member.addmissionDate}
              expiryDate={member.expiryDate}
              seatNumber={member.seatNumber || 0}
              plan={plans.find((plan) => plan.id === member.planId)?.name || ""}
              totalAmount={member.totalAmount || 0}
              amountPaid={member.amountPaid || 0}
              dueAmount={member.dueAmount || 0}
              id={member.id || 0}
              status={member.status}
            />
          </div>
        ))
      )}
    </div>
  );
}
