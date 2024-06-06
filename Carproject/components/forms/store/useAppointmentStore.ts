import { create } from "zustand";

interface AppointmentState {
  showForm: boolean;
  selectedCar: any;
  setShowForm: (show: boolean) => void;
  setSelectedCar: (car: any) => void;
  submitAppointment: (data: any) => Promise<void>;
}

export const useAppointmentStore = create<AppointmentState>((set) => ({
  showForm: false,
  selectedCar: null,
  setShowForm: (show) => set({ showForm: show }),
  setSelectedCar: (car) => set({ selectedCar: car }),
  submitAppointment: async (data) => {
    try {
      console.log("Submitting appointment with data:", data); // Log the data being submitted
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Appointment submitted successfully");
        set({ showForm: false });
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await response.json();
          alert(`Failed to submit appointment: ${errorData.message}`);
        } else {
          alert("Failed to submit appointment: Server returned an unexpected response.");
        }
      }
    } catch (error: any) {
      alert(`Failed to submit appointment: ${error.message}`);
    }
  },
}));