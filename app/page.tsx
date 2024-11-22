"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart,
  CheckCircle,
  ChevronRight,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Palette,
  Phone,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Home from "@/app/home/page";

import About from "@/app/spline/About";
// import Navbar from "@/app/navbar/page";
import Service from "@/app/service/page";
import Progress from "@/app/progress/Progress";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";
import Footer from "@/app/footer/page";
import Testimonials from "@/app/testimonials/page";
import Header from "@/components/Header";

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
