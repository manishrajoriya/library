
import { z } from "zod";

export const adminSchema = z.object({
  id: z.number().int(),
  username: z.string().min(2, "Username must be at least 2 characters."),
  password: z.string().min(2, "Password must be at least 2 characters."),
  email: z.string().email("Invalid email format"),
//   createdAt: z.date(),
//   updatedAt: z.date(),
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