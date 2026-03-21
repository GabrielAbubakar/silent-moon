import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
  privacyPolicy: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
