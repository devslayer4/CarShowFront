import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import XIcon from "@/components/icons/XIcon";

interface AppointmentFormProps {
  onClose: () => void;
}

export function AppointmentForm({ onClose }: AppointmentFormProps) {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!status) {
      alert("Status is required");
      return;
    }
    // Handle form submission with the status value
    console.log({ status });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose} />
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 w-full max-w-md z-10 max-h-[80vh] overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Make an Appointment</h2>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <XIcon className="w-6 h-6" />
          </Button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="carId">Car ID</Label>
              <Input id="carId" name="carId" required />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" required type="email" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
          </div>
          <div>
            <Label htmlFor="contact">Contact</Label>
            <Input id="contact" name="contact" required />
          </div>
          <div>
            <Label htmlFor="appointmentDate">Appointment Date</Label>
            <Input id="appointmentDate" name="appointmentDate" required type="date" />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <div id="status">
              <Select onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}