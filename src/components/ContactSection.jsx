import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use emailjs.send instead of emailjs.sendForm for better control
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Email sending failed:", error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
    
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A fresh graduate actively seeking opportunities to apply and expand my skills
          in real-world projects. I'm open to entry-level roles, or
          collaborations that allow me to grow and contribute meaningfully.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <a
                  href="mailto:joan.kirstienborja17@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  joan.kirstienborja17@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <a
                  href="tel:0942-086-8248"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  0942-086-8248
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  39-D Visitacion St., Sambag 2, Cebu City, Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Connect with Me — Centered */}
          <div className="flex flex-col items-center justify-start h-full">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="h-[57px]" />
            <div className="flex items-center space-x-10">
              <a
                href="https://www.linkedin.com/in/joan-kirstien-borja-08255b341"
                target="_blank"
                aria-label="LinkedIn"
              >
                <div className="p-4 rounded-full bg-primary/10">
                  <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              </a>
              <a href="#" target="_blank" aria-label="Instagram">
                <div className="p-4 rounded-full bg-primary/10">
                <Instagram className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/joan.borja.372/"
                target="_blank"
                aria-label="Facebook"
              >
                <div className="p-4 rounded-full bg-primary/10">       
                <Facebook className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
              </label>
              <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
              </label>
              <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>        

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >  
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16}/>
              </button>    

          </form>
        </div>

      </div>
    </section>
  );
};