import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/forms/ContactForm";


export default function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}