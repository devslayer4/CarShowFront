import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get in touch</h2>
          <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" required type="text" />
            </div>
            <div>
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" required type="text" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={4} />
            </div>
            <div className="sm:col-span-2">
              <Button className="w-full" type="submit">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}