import z from "zod";


export const loginSchema = z.object({
  username: z.string().min(3, { message: "Username is required" }),
  password: z.string().min(4, { message: "Password must be at least 4 characters" }),
});


export type LoginInput = z.infer<typeof loginSchema>;