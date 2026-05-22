"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    if (data.honeypot) {
      toast.error("Bot detected!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(result.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-md:py-12 px-2.5">
      <Toaster position="top-right" />

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot - Hidden from real users */}
          <input
            type="text"
            {...register("honeypot")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              rows={6}
              placeholder="Your Message"
              {...register("message")}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}