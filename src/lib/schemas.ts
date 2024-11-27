
import { date, z } from "zod";

export const adminSchema = z.object({
  id: z.number().int(),
  username: z.string().min(2, "Username must be at least 2 characters."),
  password: z.string().min(2, "Password must be at least 2 characters."),
  email: z.string().email("Invalid email format"),

});

export type AdminSchema = z.infer<typeof adminSchema>;




// Define Zod schema
export const planSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  duration: z.number().positive('Duration must be a positive number'),
  amount: z.number().positive('Amount must be a positive number'),
  
});

// Define TypeScript type based on Zod schema
export type Plan = z.infer<typeof planSchema>;



// Define the Zod schema for the Member model
export const memberSchema = z.object({
  id: z.coerce.number().positive().optional(),
  name: z.string().min(1, 'Name is required'),
  address: z.string().optional(),
  contactNumber: z.string().min(10, 'Contact Number is required').max(15),
  email: z.string().optional(),
  addmissionDate: z.coerce.date(), // using string for date inputs
  expiryDate: z.coerce.date(),
  totalAmount: z.coerce.number().optional(),
  amountPaid: z.coerce.number().optional(),
  dueAmount: z.coerce.number().optional(),
  status: z.enum(['LIVE', 'EXPIRED']).default('LIVE'),
  seatNumber: z.coerce.number().positive().optional(),
  plan: z.string().optional(),
  planId: z.coerce.number().optional(),
  profileImage: z.string().optional(),
  
});

// Define TypeScript type based on the Zod schema
export type memberSchemaType = z.infer<typeof memberSchema>;

export const expenseSchema = z.object({
  id: z.coerce.number().positive().optional(),
  description: z.string().optional(),
  amount: z.coerce.number(),
  date: z.coerce.date(),
  adminId: z.string().optional(),

})

export type expenseSchemaType = z.infer<typeof expenseSchema>;