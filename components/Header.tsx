"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/app/Image/iconLogo.png";

export default function Header() {
  function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        className="group flex flex-col items-center text-gray-600 hover:text-blue-500 transition-colors py-2"
      >
        <span>{children}</span>
        {/* Small blue dot with animation */}
        <span className="w-2 h-1 bg-blue-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150 mt-1"></span>
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
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/service">Our Services</NavLink>
            <NavLink href="/testimonials">Testimonials</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="SuperTech" width={80} height={80} />
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/service">Our Services</NavLink>
            <NavLink href="/testimonials">Testimonials</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
