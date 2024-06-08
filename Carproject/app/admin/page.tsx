"use client";

import AdminLoginForm from "@/components/forms/AdminLoginForm";
import { useAuthStore } from "@/components/forms/store/authStore";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });

const AdminPage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <AdminLoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminApp />;
};

export default AdminPage;