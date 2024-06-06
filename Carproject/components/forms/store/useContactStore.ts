import { create } from "zustand";

interface ContactState {
  submitContact: (data: any) => Promise<Response>;
}

export const useContactStore = create<ContactState>(() => ({
  submitContact: async (data) => {
    try {
      console.log("Submitting contact with data:", data); // Log the data being submitted
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully");
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message}`);
      }
      return response; // Return the response object
    } catch (error: any) {
      alert(`Failed to send message: ${error.message}`);
      throw error; // Re-throw the error to be handled by the caller
    }
  },
}));