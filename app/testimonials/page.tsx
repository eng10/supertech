"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import Image from "next/image";
import yes from "@/app/Image/Yes.jpg";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Testimonials() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const testimonials = [
    {
      name: "Mehwish",
      quote:
        "Compliment interested discretion estimating on stimulated apartments oh.",
      image: yes,
    },
    {
      name: "Elizabeth Jeff",
      quote:
        "Dear so sing when in find road of call. As distrusts behaviour abilities defective is.",
      image: "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/370039350_638259125127184_3346341862225603626_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gt9DTLVpP2gQ7kNvgF0j0dI&_nc_zt=23&_nc_ht=scontent.fhga1-1.fna&_nc_gid=AdVVsZq1MjZB0Q9CTIFY-py&oh=00_AYB0Dm7uCPNFStal5EjvMyQuFujcL4MNNbnWCz9PmG71Eg&oe=6744E867",
    },
    {
      name: "Emily Thomas",
      quote:
        "Never at water me might. On formed merits hunted unable merely by mr whence or.",
      image: yes,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 mx-auto"
    >
      <motion.div
        className="relative grid gap-10 items-center lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Decorative star */}
        <motion.div
          className="absolute -top-10 right-0 text-purple-500"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-16 h-16">
            <Star className="w-8 h-8 absolute right-0 fill-purple-500" />
            <svg
              className="absolute top-0 right-8"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C20 20 20 0 20 0C20 0 20 20 40 20C20 20 20 40 20 40C20 40 20 20 0 20Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </motion.div>

        {/* Left column - Header content */}
        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[600px] mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Relation so in confined smallest children unpacked delicate. Why
            sir end believe uncivil respect. Always get adieus nature day
            course for common.
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button
              className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-[5px] hover:from-blue-600 hover:to-blue-600 text-white"
              size="lg"
            >
              View More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column - Testimonials */}
        <motion.div
          className="flex flex-col gap-6 lg:-ml-12"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card
                className={`relative ${
                  index === 1
                    ? "border-l-4 border-l-purple-500 lg:-ml-12"
                    : "border-l-4 border-l-[#c8cbd0]"
                } transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}'s profile picture`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover z-10"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-1 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * index, duration: 0.5 }}
                  >
                    <h3
                      className={`${
                        index === 1 ? "" : ""
                      } font-semibold leading-none`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`${
                        index === 1 ? "" : "text-[#c8cbd0]"
                      } text-sm text-muted-foreground`}
                    >
                      {testimonial.quote}
                    </p>
                  </motion.div>
                  <motion.span
                    className={`${
                      index === 1 ? "text-blue-600" : "text-gray-200"
                    } absolute top-0 left-0 text-[120px] leading-[100px] opacity-50 font-serif`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ delay: 0.4 * index, duration: 0.5 }}
                  >
                    "
                  </motion.span>
                  <motion.span
                    className={`${
                      index === 1 ? "text-blue-600" : "text-gray-200"
                    } absolute bottom-0 right-0 text-[120px] leading-[100px] opacity-50 font-serif rotate-180`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ delay: 0.4 * index, duration: 0.5 }}
                  >
                    "
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

