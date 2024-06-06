import { useAppointmentStore } from "@/components/forms/store/useAppointmentStore";
import { appointmentSchema } from "@/components/forms/validation/ValidationSchema";
import XIcon from "@/components/icons/XIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

interface AppointmentFormProps {
  onClose: () => void;
}

export function AppointmentForm({ onClose }: Readonly<AppointmentFormProps>) {
  const { submitAppointment } = useAppointmentStore();
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data); // Log the form data
    submitAppointment(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <button className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose} tabIndex={0} aria-label="Close overlay" />
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 w-full max-w-md z-10 max-h-[80vh] overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Make an Appointment</h2>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <XIcon className="w-6 h-6" />
          </Button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="carId">Car ID</Label>
              <Input id="carId" {...register("carId")} />
              {errors.carId && <p className="text-red-500">{errors.carId.message?.toString()}</p>}
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && <p className="text-red-500">{errors.name.message?.toString()}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" {...register("firstName")} />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message?.toString()}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" {...register("message")} />
            {errors.message && <p className="text-red-500">{errors.message.message?.toString()}</p>}
          </div>
          <div>
            <Label htmlFor="contact">Contact</Label>
            <Input id="contact" {...register("contact")} />
            {errors.contact && <p className="text-red-500">{errors.contact.message?.toString()}</p>}
          </div>
          <div>
            <Label htmlFor="appointmentDate">Appointment Date</Label>
            <Input id="appointmentDate" type="date" {...register("appointmentDate")} />
            {errors.appointmentDate && <p className="text-red-500">{errors.appointmentDate.message?.toString()}</p>}
          </div>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="status">Status</Label>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                {errors.status && <p className="text-red-500">{errors.status.message?.toString()}</p>}
              </div>
            )}
          />
          <div className="flex justify-center">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}