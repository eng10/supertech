"use client";

import Home from "@/app/home/page";

import About from "@/app/spline/About";
// import Navbar from "@/app/navbar/page";
import Contact from "@/app/contact/page";
import Progress from "@/app/progress/Progress";
import Projects from "@/app/projects/page";
import Service from "@/app/service/page";
import Testimonials from "@/app/testimonials/page";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#fff]">
      <Home />
      <Service />
      <About />
    <Progress />
      <Testimonials />
      <Projects />
      <Contact />
    </div>
  );
}
