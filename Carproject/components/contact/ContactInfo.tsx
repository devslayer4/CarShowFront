import { LocateIcon } from "@/components/icons/LocateIcone";
import MailIcon from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function ContactInfo() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Dont be a stranger - Contact Us</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Get in touch with us for any inquiries or feedback.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <LocateIcon className="flex-shrink-0 h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div>
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-gray-500 dark:text-gray-400">+1 (555) 555-5555</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-500 dark:text-gray-400">info@acme.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}