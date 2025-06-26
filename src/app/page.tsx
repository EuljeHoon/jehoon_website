import React from "react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";

export default function Portfolio() {
  return (
    <main className="pt-24 min-h-screen bg-white text-[#1B1F3B] p-8">
      {/* header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About/>

      {/* Experience Section */}
      <Experience/>

      {/* Projects Section */}
      <Projects/>
      
      {/* Skills section */}
      <Skills/>

      {/* Contact section */}
      <ContactForm />

    </main>
  );
}
