"use client";

import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { useAuthStore } from "@/components/forms/store/authStore";
import CarIcon from "@/components/icons/CarIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import UserIcon from "@/components/icons/UserIcon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const toggleLoginForm = () => setShowLoginForm(!showLoginForm);
  const toggleRegisterForm = () => setShowRegisterForm(!showRegisterForm);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
        <CarIcon className="h-6 w-6" />
        <span>Carshow</span>
      </Link>
      <nav className="hidden ml-auto gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="font-bold" prefetch={false}>
          Home
        </Link>
        <Link href="/cars" className="text-gray-500 dark:text-gray-400" prefetch={false}>
          Cars
        </Link>
        <Link href="/contact" className="text-gray-500 dark:text-gray-400" prefetch={false}>
          Contacts
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-4 md:gap-2 lg:gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                <HomeIcon className="mr-2 h-5 w-5" />
                Home
              </Link>
              <Link href="/cars" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                <CarIcon className="mr-2 h-5 w-5" />
                Cars
              </Link>
              <Link href="/contact" className="text-gray-500 dark:text-gray-400" prefetch={false}>
                Contacts
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        {isAuthenticated ? (
          <UserIcon className="h-6 w-6 cursor-pointer" />
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={toggleLoginForm}
          >
            <UserIcon className="h-6 w-6" />
            <span className="sr-only">Login</span>
          </Button>
        )}
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Button>
        <Link href="/admin">
          <Button variant="outline">Intranet</Button>
        </Link>
      </div>
      {showLoginForm && <LoginForm onClose={toggleLoginForm} onSwitchToRegister={toggleRegisterForm} />}
      {showRegisterForm && <RegisterForm onClose={toggleRegisterForm} onSwitchToLogin={toggleLoginForm} />}
    </header>
  );
}