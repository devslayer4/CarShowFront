import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const appointmentSchema = z.object({
  carId: z.string().min(1, "Car ID is required"),
  name: z.string().min(1, { message: "Name is required" }),
  firstName: z.string().min(1, { message: "First Name is required" }),
  email: z.string().email("Invalid email address").min(1, { message: "Email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  contact: z.string().min(1, "Contact is required"),
  appointmentDate: z.string().min(1, "Appointment Date is required"),
  status: z.enum(["pending", "confirmed", "cancelled"]).refine((val) => ["pending", "confirmed", "cancelled"].includes(val), {
    message: "Status is required",
  }),
});