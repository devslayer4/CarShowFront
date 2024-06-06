"use client";

import { useContactStore } from "@/components/forms/store/useContactStore";
import { contactSchema } from "@/components/forms/validation/ValidationSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const { submitContact } = useContactStore();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await submitContact(data);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact Us</h2>
          <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" {...register("firstName")} />
              {errors.firstName?.message && <p className="text-red-500">{String(errors.firstName.message)}</p>}
            </div>
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" {...register("lastName")} />
              {errors.lastName?.message && <p className="text-red-500">{String(errors.lastName.message)}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email?.message && <p className="text-red-500">{String(errors.email.message)}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" {...register("message")} rows={4} />
              {errors.message?.message && <p className="text-red-500">{String(errors.message.message)}</p>}
            </div>
            <div className="sm:col-span-2">
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}