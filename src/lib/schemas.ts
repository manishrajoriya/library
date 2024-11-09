
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

