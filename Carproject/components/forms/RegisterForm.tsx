import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import XIcon from "@/components/icons/XIcon";
import { useAuthStore } from "@/components/forms/store/authStore";
import { registerSchema } from "@/components/forms/validation/ValidationSchema";
import { z } from "zod";

export default function RegisterForm({ onClose, onSwitchToLogin }: { onClose: () => void, onSwitchToLogin: () => void }) {
  const register = useAuthStore((state) => state.register);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; email?: string; phone?: string; password?: string; confirmPassword?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      registerSchema.parse({ username, email, phone, password, confirmPassword });
      await register(username, email, phone, password);
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Register</h2>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Enter your phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" placeholder="Confirm your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </form>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?
            <button className="font-medium underline underline-offset-2" onClick={() => { onClose(); onSwitchToLogin(); }}>
              Please login
            </button>
          </div>
        </div>
        <Button className="absolute top-4 right-4" size="icon" variant="ghost" onClick={onClose}>
          <XIcon className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  );
}
           