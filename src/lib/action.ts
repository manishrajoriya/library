

import { memberSchema } from "@/components/studentForm";
import { z } from "zod";
import prisma from "./prisma";
import { AdminSchema, adminSchema } from "./schemas";
import { PrismaClient } from '@prisma/client';



export async function createMember({data}: {data: z.infer<typeof memberSchema>}) {
    const prisma = new PrismaClient();
  try {
    // Validate the data using zod schema
    const validatedData = memberSchema.parse(data);

    // Insert the validated data into the database using Prisma
    const newMember = await prisma.member.create({
      data: {
        id: validatedData.id,
        name: validatedData.name,
        address: validatedData.address,
        contactNumber: validatedData.contactNumber,
        email: validatedData.email,
        addmissionDate: validatedData.addmissionDate,
        expiryDate: validatedData.expiryDate,
        status: validatedData.status,
        seatNumber: validatedData.seatNumber,
        profileImage: validatedData.profileImage,
        planId: validatedData.planId,
      },
    });

    return newMember;
  } catch (error) {
    console.error("Failed to create member:", error);
    throw error;
  }
}


export async function createAdmin({data}: {data: z.infer<typeof adminSchema>}) {
    const prisma = new PrismaClient();
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