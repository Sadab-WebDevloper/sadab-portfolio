'use client';
import { m } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-foreground/60 max-w-2xl mt-4">
            Have a project in mind or just want to say hi? I&apos;m currently open for new opportunities. Let&apos;s build something amazing together.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <m.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="p-8 rounded-3xl bg-background border border-border shadow-lg flex flex-col gap-6 h-full">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/60">Email</h4>
                  <a href="mailto:sadabmamu3@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">sadabmamu3@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/60">Phone</h4>
                  <a href="tel:+919510574790" className="text-lg font-medium hover:text-secondary transition-colors">+91 9510574790</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/60">Location</h4>
                  <p className="text-lg font-medium">Himmatnagar, Gujarat, India</p>
                </div>
              </div>
            </div>
          </m.div>

          {/* Contact Form */}
          <m.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-background border border-border shadow-lg flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/80">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/80">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="sadab@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground/80">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required 
                  className="px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/80">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required 
                  maxLength={2000}
                  rows={5}
                  className="px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-bold hover:bg-primary transition-colors mt-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
