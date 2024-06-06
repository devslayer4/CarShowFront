import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { carId, name, firstName, email, message, contact, appointmentDate, status } = req.body;

    // Simuler l'enregistrement de l'appointment
    console.log("Appointment data:", req.body);

    res.status(200).json({ message: "Appointment submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}