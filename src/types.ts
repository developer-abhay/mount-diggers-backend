import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
