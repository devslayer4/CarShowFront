import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, phone: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: null,
  login: async (email, password) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      set({ isAuthenticated: true, username: data.username });
    } else {
      alert("Authentication failed");
    }
  },
  logout: () => set({ isAuthenticated: false, username: null }),
  register: async (username, email, phone, password) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, phone, password }),
    });

    if (response.ok) {
      alert("Registration successful");
      set({ isAuthenticated: true, username });
    } else {
      alert("Registration failed");
    }
  },
}));