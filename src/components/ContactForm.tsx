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
    <section id="contact" className="scroll-mt-12 flex flex-col flex-end items-end justify-center md:flex-row px-6 py-16 max-w-6xl mx-auto">
      {/* Left picture */}
      <div className = "flex justify-center md:justify-end w-full md:w-1/3">
        <img
          src="/Jehoon_suite image.png"
          alt="Jehoon Park contact image"
          className = "max-w-[260px] w-full h-auto object-contain mb-4"
        />
      </div>

      {/* Right email */}
      <div className="w-full md:w-2/3">
        <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-flex p-6 bg-white shadow-xl rounded-2xl space-y-4 mt-30 ml-10"
        >
          <h2 className="text-2xl font-bold text-[#7A0019]">📮 Contact Jehoon</h2>
          <p className="text-[#7A0019] text-black">I'm always open to have conversations. DO NOT hesitate to contact me!</p>

          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email (Please double check if email typed correctly)"
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
            className="bg-[#7A0019] text-white px-4 py-2 rounded hover:bg-[#FFCC33] hover:text-black transition"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}
