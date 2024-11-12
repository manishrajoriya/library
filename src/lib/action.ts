
"use server"
import { memberSchema } from "@/components/forms/studentForm";
import { z } from "zod";
import prisma from "./prisma";
import { AdminSchema, adminSchema } from "./schemas";
import { Plan, planSchema } from '@/lib/schemas';




export async function createMember({data}: {data: z.infer<typeof memberSchema>}) {
    
  try {
    // Validate the data using zod schema
    

    // Insert the validated data into the database using Prisma
    const newMember = await prisma.member.create({
      data: {
        
        name: data.name,
        address: data.address,
        contactNumber: data.contactNumber,
        email: data.email,
        addmissionDate: data.addmissionDate,
        expiryDate: data.expiryDate,
        status: data.status,
        seatNumber: data.seatNumber,
        profileImage: data.profileImage,
        planId: data.planId
      },
    });

    return newMember;
  } catch (error) {
    console.error("Failed to create member:", error);
    throw error;
  }
}


export async function createAdmin({data}: {data: z.infer<typeof adminSchema>}) {
    
  try {
    // Validate the data using zod schema
    const validatedData = adminSchema.parse(data);

    // Insert the validated data into the database using Prisma
    const newAdmin = await prisma.admin.create({
      data: {
        id: validatedData.id,
        username: validatedData.username,
        password: validatedData.password,
        email: validatedData.email,
      },
    });

    return newAdmin;
  } catch (error) {
    console.error("Failed to create admin:", error);
    throw error;
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

