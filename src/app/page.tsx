import React from "react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Portfolio() {
  return (
    <main className="pt-24 min-h-screen bg-cover bg-center bg-repeat text-[#1B1F3B] p-8"
    style={{
      backgroundImage: "url('/umn_background_light.png')"
      }}
    >
      {/* header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About/>

      {/* Projects Section */}
      <Projects/>
      
      {/* Skills section */}
      <Skills/>

      {/* Contact section */}
      <ContactForm />

    </main>
  );
}
