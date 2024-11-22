
"use server"
import { memberSchema } from "@/components/forms/studentForm";
import { z } from "zod";
import prisma from "./prisma";

import {  planSchema } from '@/lib/schemas';
import { auth } from '@clerk/nextjs/server'

// export async function createAdmin({data}){
//   const {userId, redirectToSignIn } = await auth()
//   if (!userId) return redirectToSignIn()
//     console.log(userId);
//   const result = await prisma.admin.create({
//     data: {

//     }
//   })
    
// }


export async function createMember({data}: {data: z.infer<typeof memberSchema>}) {
    
  try {
    // Validate the data using zod schema
    const {userId, redirectToSignIn } = await auth()
    if (!userId) return redirectToSignIn()
    memberSchema.parse(data);
 
    // Insert the validated data into the database using Prisma
    const newMember = await prisma.member.create({
     
      data: {
        
        name: data.name,
        address: data?.address,
        contactNumber: data.contactNumber,
        email: data?.email,
        addmissionDate: data.addmissionDate,
        expiryDate: data.expiryDate,
        status: data.status,
        seatNumber: data?.seatNumber,
        profileImage: data?.profileImage,
        dueAmount: data?.dueAmount,
        totalAmount: data?.totalAmount,
        amountPaid: data?.amountPaid,
        plan: { connect: { id: data.planId } }
      },
      
    });

    return newMember;
  } catch (error) {
    console.error("Failed to create member:", error);
    throw error;
  }
}

export async function deleteMember({ id }: { id: number }) {
  try {
    const deletedMember = await prisma.member.delete({
      where: { id },
    });

    return deletedMember;
  } catch (error) {
    console.error("Failed to delete member:", error);
    throw error;
  }
}

export async function updateMember({
  id,
  data,
}: {
  id: number;
  data: z.infer<typeof memberSchema>;
}) {
  try {
    // Validate the data using the zod schema if needed
    memberSchema.parse(data);

    // Update the member data in the database using Prisma
    const updatedMember = await prisma.member.update({
      where: { id },
      data: {
        name: data.name,
        address: data?.address,
        contactNumber: data.contactNumber,
        email: data?.email,
        addmissionDate: data.addmissionDate,
        expiryDate: data.expiryDate,
        status: data.status,
        seatNumber: data?.seatNumber,
        profileImage: data?.profileImage,
        dueAmount: data?.dueAmount,
        totalAmount: data?.totalAmount,
        amountPaid: data?.amountPaid,
        plan: { connect: { id: data.planId } },
      },
    });

    return updatedMember;
  } catch (error) {
    console.error("Failed to update member:", error);
    throw error;
  }
}


export async function getAllMembers() {
  try {
    const members = await prisma.member.findMany();
    console.log('Fetched members:', members);
    return members
    
  } catch (error) {
    console.error('Error fetching members:', error);
    throw new Error('Failed to fetch members');
  }
}




export async function createPlan({data}: {data: z.infer<typeof planSchema>}) {
  try {
    const plan = await prisma.plan.create({
      data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        amount: data.amount
      }
    });
    console.log(plan);
    return plan
    
  } catch (error) {
    console.log(error);
    
  }
}

export async function getAllPlans() {
  try {
    const plans = await prisma.plan.findMany();
    console.log('Fetched plans:', plans);
    return plans
    
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw new Error('Failed to fetch plans');
  }
}

export async function deletePlan({ id }: { id: number }) {
  try {
    const deletedPlan = await prisma.plan.delete({
      where: { id },
    });

    return deletedPlan;
  } catch (error) {
    console.error("Failed to delete plan:", error);
    throw error;
  }
}

export async function updatePlan({
  id,
  data,
}: {
  id: number;
  data: z.infer<typeof planSchema>;
}) {
  try {
    // Validate the data using the zod schema if needed
    planSchema.parse(data);

    // Update the plan data in the database using Prisma
    const updatedPlan = await prisma.plan.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        amount: data.amount,
      },
    });

    return updatedPlan;
  } catch (error) {
    console.error("Failed to update plan:", error);
    throw error;
  }
}





