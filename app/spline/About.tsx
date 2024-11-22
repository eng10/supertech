"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BarChart3, MessageSquare, Target, Share2, Puzzle } from "lucide-react";

export default function About() {
  const iconData = [
    {
      Component: MessageSquare,
      color: "text-blue-400",
      animation: { y: [0, -20, 0] },
    },
    {
      Component: BarChart3,
      color: "text-blue-500",
      animation: { x: [0, -20, 0] },
    },
    { Component: Target, color: "text-pink-500", animation: { y: [0, 20, 0] } },
    {
      Component: Share2,
      color: "text-purple-500",
      animation: { x: [0, 20, 0] },
    },
    {
      Component: Puzzle,
      color: "text-pink-400",
      animation: { rotate: [0, 45, 0] },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side with large, auto-animating icons */}
          <div className="relative h-[500px]  flex justify-around items-center flex-wrap">
            {iconData.map((icon, index) => (
              <motion.div
                key={index}
                animate={icon.animation}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <icon.Component className={`w-24 h-24 ${icon.color}`} />
              </motion.div>
            ))}
          </div>

          {/* Right side with content */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-lg font-medium"
            >
              ABOUT US
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              We're Best In Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Scale your software operations through a custom engineering team.
              Meet the demand of your company's operations with a
              high-performing sensitive team skilled in the technologies you
              need and solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
            <Button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold">
                See About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
