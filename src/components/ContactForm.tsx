"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("✅ Message sent!");
        form.current?.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send email: " + error.text);
      });
  };

  return (
    <section id="contact" className="scroll-mt-12 max-w-5xl mx-auto py-50 px-4">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
        <img
          src="/Jehoon_suite image.png"
          alt="Jehoon Suite"
          className="w-80 h-80 object-contain"
          style={{ minWidth: 180 }}
        />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 w-full p-6 bg-gray-50 shadow-xl rounded-2xl space-y-4 mt-0"
        >
          <h2 className="text-2xl font-bold text-black">📨 Contact Jehoon</h2>
          <p className="text-black">I'm always open for new opportunities. DO NOT hesitate to contact me!</p>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-2 rounded h-32"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-[#FFCC33] hover:text-black transition"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}
