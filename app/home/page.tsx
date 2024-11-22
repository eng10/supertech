"use client";
import Spline from "@splinetool/react-spline/next";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Target,
  Smartphone,
  Atom,
  Menu,
  MonitorCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

function FloatingCard({
  title,
  icon: Icon,
  className,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "absolute bg-white rounded-xl p-4 shadow-lg flex items-center gap-3",
        "hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="p-2 bg-gray-50 rounded-lg">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <span className="text-sm font-medium text-gray-800">{title}</span>
    </motion.div>
  );
}

function FloatingIcons() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-12 right-24"
      >
        <Code className="w-6 h-6 text-blue-500 opacity-60" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-24 right-12"
      >
        <Atom className="w-6 h-6 text-blue-500 opacity-60" />
      </motion.div>
    </>
  );
}

function AnimatedCircleLine() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 4, repeat: Infinity },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
      <motion.path
        d="M200,50 A150,150 0 1,1 199,50"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}

function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Our Services</NavLink>
          <NavLink href="/testimonials">Testimonials</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Component() {
  return (
    <>
      <div className=" bg-[#E8E9F5] flex flex-col">
        <main className="flex-grow  container mx-auto px-4 py-8 md:py-16">
          <div className="bg-[#E8E9F5] rounded-3xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Empowering Your Vision with Innovative Solutions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                >
                  At SuperTech Solutions, we turn your ideas into reality.
                  Whether it's crafting a unique brand or building innovative
                  web and mobile apps, we’re here to help grow your business and
                  connect you with the people that matter most. Let’s create
                  something special together!
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href="/projects"
                  className="inline-flex items-center bg-blue-500  text-white py-3 px-3  rounded-[6px] font-medium hover:bg-blue-400 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>

              <div className="relative h-[300px] md:h-[400px] mt-8 md:mt-0">
                <AnimatedCircleLine />
                <FloatingIcons />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FloatingCard
                    title="Branding"
                    icon={Target}
                    className="top-0 left-1/2 -translate-x-1/2"
                    delay={0.3}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                >
                  <FloatingCard
                    title="web Applications"
                    icon={MonitorCheck}
                    className="top-32 right-0"
                    delay={0.4}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <FloatingCard
                    title="Mobile Applications"
                    icon={Smartphone}
                    className="top-28 left-12"
                    delay={0.5}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
