"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  // const [loading, setLoading] = useState(false);

  // async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   setLoading(true);

  //   // const formData = {
  //   //   name: e.target.name.value,
  //   //   email: e.target.email.value,
  //   //   message: e.target.message.value,
  //   // };

  //   // const response = await fetch('/api/contact', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify(formData),
  //   // })
  //   console.log(JSON.stringify(formData));
  //   setLoading(false);

  //   // if (response.ok) {
  //   //   toast.success("Message sent successfully!");
  //   //   e.target.reset();
  //   // } else {
  //   //   toast.error("Something went wrong!");
  //   // }
  // }

  return (
    <section id="contact" className="py-24 px-6">
      <Toaster position="top-right" />

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form
        //  onSubmit={handleSubmit}
          className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <button
            type="submit"
            // disabled={loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
          > Send Message
            {/* {loading ? "Sending..." : "Send Message"} */}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
