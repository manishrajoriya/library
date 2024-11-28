
"use server"
import { expenseSchema, memberSchema } from "@/lib/schemas";
import { z } from "zod";
import prisma from "./prisma";

import {  planSchema } from '@/lib/schemas';
import { auth } from '@clerk/nextjs/server'





export async function createMember({data}: {data: z.infer<typeof memberSchema>}) {
    
  try {
    // Validate the data using zod schema
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const admin = await prisma.admin.findUnique({
      where: {
        id: userId
      },
    })
    // Insert the validated data into the database using Prisma
    const newMember = await prisma.member.create({
      
      data: {
        admin: { connect: { id: admin?.id} },
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
        plan: { connect: { id: data?.planId } },
      },
    });
   console.log(newMember);
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
     const {userId, redirectToSignIn} =await auth()
     
     
    if (!userId) return redirectToSignIn()
    const members = await prisma.member.findMany({
      
      where: {
        adminId: userId
      }
    });
    console.log('Fetched members:', members);
    return members
    
  } catch (error) {
    console.error('Error fetching members:', error);
    throw new Error('Failed to fetch members');
  }
}

export async function countMembers() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const membersCount = await prisma.member.count({
      where: {
        adminId: userId
      }
    });
    return membersCount;
  } catch (error) {
    console.error('Error counting members:', error);
    throw new Error('Failed to count members');
  }
}

export async function liveMembersCount() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const Count = await prisma.member.count({
      where: {
        adminId: userId,
        status:"LIVE"
      }
    });
    return Count;
  } catch (error) {
    console.error('Error counting members:', error);
    throw new Error('Failed to count members');
  }
}

export async function inactiveMembersCount() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const Count = await prisma.member.count({
      where: {
        adminId: userId,
        status:"EXPIRED"
      }
    });
    return Count;
  } catch (error) {
    console.error('Error counting members:', error);
    throw new Error('Failed to count members');
  }
}

export async function totalAmountCount() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const result = await prisma.member.aggregate({
      where: {
        adminId: userId,
      },
      _sum: {
        totalAmount: true
      }

    });

   const Count = result._sum.totalAmount || 0
    return Count;
  } catch (error) {
    console.error('Error counting members:', error);
    throw new Error('Failed to count members');
  }
}

export async function dueAmountCount() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const result = await prisma.member.aggregate({
      where: {
        adminId: userId,
      },
      _sum: {
        dueAmount: true
      }

    });

   const Count = result._sum.dueAmount || 0
    return Count;
  } catch (error) {
    console.error('Error counting members:', error);
    throw new Error('Failed to count members');
  }
}

export async function paidAmountCount() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const result = await prisma.member.aggregate({
      where: {
        adminId: userId,
      },
      _sum: {
        amountPaid: true
      }

    });

   const Count = result._sum.amountPaid || 0
    return Count;
  } catch (error) {
    console.error('Error counting members:', error);
    throw new Error('Failed to count members');  
  }
}




export async function createPlan({data}: {data: z.infer<typeof planSchema>}) {
  try {
     const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
      const admin = await prisma.admin.findUnique({
        where: {
          id: userId
        }
      })
    const plan = await prisma.plan.create({
      data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        amount: data.amount,
        admin: {
          connect: {
            id: admin?.id
          }
        }
      }
    });
    
    return plan
    
  } catch (error) {
    console.log("unable to create plan",error);
    
  }
}

export async function getAllPlans() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const plans = await prisma.plan.findMany({
      where: {
        adminId: userId
      }
    });
    
    return plans
    
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw new Error('Failed to fetch plans');
  }
}

export async function deletePlan({ id }: { id: number }) {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const deletedPlan = await prisma.plan.delete({
      where: {  adminId: userId, id },
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
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const updatedPlan = await prisma.plan.update({
      where: { adminId: userId, id },
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


export async function createExpense({data}: {data: z.infer<typeof expenseSchema>}) {
  try {
     const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
      const admin = await prisma.admin.findUnique({
        where: {
          id: userId
        }
      })
    const expense = await prisma.expense.create({
      data: {
        description: data.description,
        amount: data.amount,
        date: data.date,
        admin: {
          connect: {
            id: admin?.id
          }
        }
      }
    });
    
    return expense
    
  } catch (error) {
    console.log("unable to create expense",error);
    
  }
}

export async function getAllExpenses() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const expenses = await prisma.expense.findMany({
      where: {
        adminId: userId
      }
    });
    
    return expenses
    
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw new Error('Failed to fetch expenses');
  }
}

export async function deleteExpense({ id }: { id: number }) {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const deletedExpense = await prisma.expense.delete({
      where: {  adminId: userId, id },
    });

    return deletedExpense;
  } catch (error) {
    console.error("Failed to delete expense:", error);
    throw error;
  }
}

export async function updateExpense({
  id,
  data,
}: {
  id: number;
  data: z.infer<typeof expenseSchema>;
}) {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const updatedExpense = await prisma.expense.update({
      where: { adminId: userId, id },
      data: {
        description: data.description,
        amount: data.amount,
        date: data.date,
      },
    });

    return updatedExpense;
  } catch (error) {
    console.error("Failed to update expense:", error);
    throw error;
  }
}

export async function ExpensesCount() {
  try {
    const {userId, redirectToSignIn} =await auth()
    if (!userId) return redirectToSignIn()
    const result = await prisma.expense.aggregate({
      where: {
        adminId: userId,
      },
      _sum: {
        amount: true
      }
    });
    const Count = result._sum.amount || 0;
    return Count
  } catch (error) { 
    console.error("Failed to count expenses:", error);
    throw error;
  }
}


