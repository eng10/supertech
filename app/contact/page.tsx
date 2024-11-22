"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function contact() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-14 py-12">
        <motion.div
          className="space-y-12"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="ml-5" variants={fadeInUp}>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in touch
            </h1>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              Use our contact form for all information requests or contact us
              directly using the contact information below. All information is
              treated with complete confidentiality and in accordance with our{" "}
              <Link
                href="/data-protection"
                className="text-primary hover:underline"
              >
                data protection statement
              </Link>
              .
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col lg:flex-row gap-8"
          >
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you
                  shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <motion.div
                    className="grid gap-4 sm:grid-cols-2"
                    variants={stagger}
                  ></motion.div>
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      required
                      className="py-6 rounded-[4px]"
                    />
                  </motion.div>
                  <motion.div
                    className="grid gap-4 sm:grid-cols-2"
                    variants={stagger}
                  >
                    <motion.div className="space-y-2" variants={fadeInUp}>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        className="py-6 rounded-[4px]"
                      />
                    </motion.div>
                    <motion.div className="space-y-2" variants={fadeInUp}>
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        placeholder="Enter your position"
                        className="py-6 rounded-[4px]"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <Label htmlFor="interest">
                      What are you interested in?
                    </Label>
                    <Select>
                      <SelectTrigger className="py-6 rounded-[5px]">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[5px]">
                        <SelectItem value="product">Product Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[150px] resize-none rounded-[5px]"
                      id="message"
                      placeholder="Enter your message"
                      required
                    />
                  </motion.div>
                  <motion.div className="space-y-4" variants={fadeInUp}>
                    <Button
                      className="w-full rounded-[5px] py-2 bg-blue-500 hover:bg-blue-600"
                      size="lg"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      By clicking Submit, you agree that we can process your
                      personal data as required for the information request. You
                      have read the{" "}
                      <Link
                        href="/data-protection"
                        className="text-primary hover:underline"
                      >
                        data protection statement
                      </Link>
                      .
                    </p>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
            <motion.div variants={fadeInUp} className="lg:w-1/3 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="mailto:info@neoverv.com"
                      className="hover:underline"
                    >
                      supertechss@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <a href="tel:+49302060862" className="hover:underline">
                      +252 63 8313219
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>When you can reach us</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Saturday - Thursday: 7:00 AM - 10:00 PM</p>
                  <p>Friday : Closed</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
