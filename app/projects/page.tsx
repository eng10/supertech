"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import mobile from "@/app/Image/mobile.jpg";
import soft from "@/app/Image/soft.jpg";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";

// Array containing the card data
const serviceCards = [
  {
    title: "restaurant project ",
    description:
      "Streamline your restaurant operations with an all-in-one management system. Manage menus, orders, reservations and more...",
    imageSrc:
      "https://i.pinimg.com/736x/6d/81/19/6d8119800984fb11d86584c2c826869e.jpg",
    imageAlt: "restaurant project ",
  },
  {
    title: "school management system",
    description:
      "Simplify school operations with our compact and efficient school management system. Manage students, classes, exams, and more...",
    imageSrc:
      "https://i.pinimg.com/736x/36/66/a2/3666a2a0b138951e65b74af7818f3cea.jpg",
    imageAlt: "school system",
  },
  {
    title: "e-commerce project",
    description:
      "Empower your business with our dynamic e-commerce platform. Seamlessly manage products, track orders and more...",
    imageSrc:
      "https://i.pinimg.com/736x/10/eb/47/10eb4718135563f4d7503dcd3a9d7a38.jpg",
    imageAlt: "Data Security illustration",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* <Navbar /> */}
      <section className="relative w-full overflow-hidden px-4 py-14 md:py-24">
        {/* Gradient Background */}
        <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Projects
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              See some of our projects
              <br />
            </h2>
          </motion.div>

          {/* Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCards.map((card, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group relative h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-full">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        width={128}
                        height={128}
                        quality={90}
                        layout="responsive"
                        className="rounded-[5px] "
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <button className="flex items-center text-purple-600 hover:text-purple-800">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
