
"use server"
import { expenseSchema, memberSchema } from "@/lib/schemas";
import { z } from "zod";
import prisma from "./prisma";

import {  planSchema } from '@/lib/schemas';
import { auth } from '@clerk/nextjs/server'
import { Prisma } from "@prisma/client";
import { v2 as cloudinary } from 'cloudinary';




// export async function createMember({data}: {data: z.infer<typeof memberSchema>}) {
    
//   try {
//     // Validate the data using zod schema
//     const {userId} =await auth()
//     if (!userId) {
      
//     }
//     const admin = await prisma.admin.findUnique({
//       where: {
//         id: userId!
//       },
//     })
//     // Insert the validated data into the database using Prisma
//     const newMember = await prisma.member.create({
      
//       data: {
//         admin: { connect: { id: admin?.id} },
//         name: data.name,
//         address: data?.address,
//         contactNumber: data.contactNumber,
//         email: data?.email,
//         addmissionDate: data.addmissionDate,
//         expiryDate: data.expiryDate,
//         status: data.status,
//         seatNumber: data?.seatNumber,
//         profileImage: data?.profileImage,
//         dueAmount: data?.dueAmount,
//         totalAmount: data?.totalAmount,
//         amountPaid: data?.amountPaid,
//         plan: { connect: { id: data?.planId } },
//       },
//     });
//    console.log(newMember);
//     return newMember;
//   } catch (error) {
//     console.error("Failed to create member:", error);
//     throw error;
//   }
// }


export async function createMember({ data }: { data: z.infer<typeof memberSchema> }) {
  try {
    // Authenticate the user
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
      }
    }
    // Check if the admin exists
    const admin = await prisma.admin.findUnique({
      where: { id: userId },
    });

    if (!admin) {
      return {
        success: false,
        message: "Admin not found",
      }
    }
   
    // Validate plan ID (optional: if planId is required)
    const planExists = await prisma.plan.findUnique({
      where: { id: data?.planId },
    });

    if (!planExists) {
      return {
        success: false,
        message: "Plan does not exist",
      }
    }
    const validatedData = memberSchema.parse(data);
   
    // Insert data into the database
    const newMember = await prisma.member.create({
      data: {
        admin: { connect: { id: admin.id } },
        name: validatedData.name,
        address:  validatedData?.address,
        contactNumber: validatedData?.contactNumber || "",
        email: validatedData?.email,
        addmissionDate: validatedData.addmissionDate,
        expiryDate: validatedData.expiryDate,
        status: validatedData.status,
        seatNumber: validatedData?.seatNumber,
        profileImage: validatedData?.profileImage,
        dueAmount: validatedData?.dueAmount,
        totalAmount: validatedData?.totalAmount,
        amountPaid: validatedData?.amountPaid,
        plan: { connect: { id: data?.planId } },
      },
    });

    console.log("Member created successfully:", newMember);
    return {
      success: true,
      member: newMember,
      message: "Member created successfully",
    };

  } catch (error: any) {
    console.error("Error creating member:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        message: error.message,
      }
    }
    if (error.code === "P2002") {
      // Prisma unique constraint violation error
      return {
        success: false,
        error: "A member with this email already exists.",
      };
    }

    return {
      success: false,
      message: error.message || "Unknown error occurred",
    }
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
    const ITEM_PER_PAGE = 10
    
    const {userId} =await auth()
    if (!userId) {
      return{
        success: false,
        message: "User not authenticated"
      }
    }
    const members = await prisma.member.findMany({
      
      where: {
        adminId: userId
      },
      include: {
        plan: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: ITEM_PER_PAGE,
      
    });
    console.log('Fetched members:', members);
    return {
      success: true,
      members: members
    }
    
  } catch (error) {
    console.error('Error fetching members:', error);
    return {
      success: false,
      message: "Failed to fetch members"
    }
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

export async function getSeatNumber() {
  try {
    const {userId} =await auth()
    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
      }
    }

    const admin = await prisma.admin.findUnique({
      where: {
        id: userId
      }
    })

    if (!admin) {
      return {
        success: false,
        message: "Admin not found",
      }
    }

    const occupiedSeats = await prisma.member.findMany({
      where: {
        seatNumber: {
          not: null // Only consider members with an assigned seat number
        },
        status: 'LIVE',
      },
      select: {
        seatNumber: true
      },
      
    })
    // Extract seat numbers into an array
    const occupiedSeatNumbers = occupiedSeats.map((member) => member.seatNumber);
    const maxSeats = 100; // Change this to your maximum seat capacity
    const allSeats = Array.from({ length: maxSeats }, (_, i) => i + 1);
     const availableSeat = allSeats.find((seat) => !occupiedSeatNumbers.includes(seat)) ;

     return availableSeat
      ? { success: true, seatNumber: availableSeat }
      : { success: false, message: 'No available seats' };
  } catch (error) {
    return {
      success: false,
      message: "Failed to get seat number",
    }
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
    const {userId} =await auth()
    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
      }
    }
    const plans = await prisma.plan.findMany({
      where: {
        adminId: userId
      }
    });
    
    return {
      success: true,
      plans
    }
    
  } catch (error) {
    console.log("unable to get plans",error);
    return {
      success: false,
      message: "Failed to get plans",
    }
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

export async function getPlanAmount({id}: {id: number}) {
  try {
    const {userId} =await auth()
    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
      }
    }

    const admin = await prisma.admin.findUnique({
      where: {
        id: userId
      }
    })

    if (!admin) {
      return {
        success: false,
        message: "Admin not found",
      }
    }

    const planAmount = await prisma.plan.findUnique({
      where: {
        adminId: userId,
        id
      },
      select: {
        amount: true
      }
    });

    return {
      success: true,
      amount: planAmount
    } 
  } catch (error) {
    return {
      success: false,
      message: "Failed to get plan amount",
    }
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


export async function uploadOnCloudinary(file: File) {
  try {
     cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    if (!cloudinary.config().cloud_name || !cloudinary.config().api_key || !cloudinary.config().api_secret) {
      return {
        success: false,
        message: "Cloudinary configuration is missing",
      }
    }
    interface CloudinaryUploadResult {
    public_id: string;
    [key: string]: any
}
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const result = await new Promise<CloudinaryUploadResult>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {folder: "next-cloudinary-uploads"},
                    (error, result) => {
                        if(error) reject(error);
                        else resolve(result as CloudinaryUploadResult);
                    }
                )
                uploadStream.end(buffer)
            }
        )
    console.log(result);
    return{
      success: true,
      url: result.public_id
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to upload image",
    }
  }
}