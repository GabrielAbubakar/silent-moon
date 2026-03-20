import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
});

// This creates a TypeScript type automatically from your schema!
export type SignInFormData = z.infer<typeof signInSchema>;
