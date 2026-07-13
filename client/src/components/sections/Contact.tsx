import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    window.location.href = `mailto:pooja@example.com?subject=${encodeURIComponent(`Contact from ${name}`)}&body=${encodeURIComponent(`Hi Pooja,\n\n${message}`)}`;
  };

  return (
    <AnimatedSection id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Get in Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Have a project in mind? Let's build something together.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to
              be part of your vision. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground group">
                <span className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="size-5 text-primary" />
                </span>
                <span>pooja@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <span className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="size-5 text-primary" />
                </span>
                <span>India</span>
              </div>
            </div>
          </div>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="size-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
