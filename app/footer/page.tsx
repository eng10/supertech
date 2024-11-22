import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import logo from "@/app/Image/iconLogo.png";

export default function footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      <hr />
      {/* Blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-300/30 to-transparent blur-2xl"></div>

      {/* Decorative SVG lines */}
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <svg
          width="300"
          height="200"
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M290 0C260 80 230 140 0 160"
            stroke="rgba(219, 234, 254, 0.4)"
            strokeWidth="2"
          />
          <path
            d="M290 40C260 120 230 180 0 200"
            stroke="rgba(219, 234, 254, 0.4)"
            strokeWidth="2"
          />
          <path
            d="M290 80C260 160 230 220 0 240"
            stroke="rgba(219, 234, 254, 0.4)"
            strokeWidth="2"
          />
          <path
            d="M290 -40C260 40 230 100 0 120"
            stroke="rgba(219, 234, 254, 0.3)"
            strokeWidth="2"
          />
          <path
            d="M290 100C260 180 230 240 0 260"
            stroke="rgba(219, 234, 254, 0.3)"
            strokeWidth="2"
          />
          <path
            d="M290 140C260 220 230 280 0 300"
            stroke="rgba(219, 234, 254, 0.3)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            {/* <h2 className="text-xl font-bold">AR SHAKIR</h2> */}
            <Image src={logo} width={80} height={80} alt="supertech" />
            <p className="text-muted-foreground text-sm">
              Think about your company that has taken off.
            </p>
            <div className="flex space-x-4">
              <Link target="_blank" href="https://www.linkedin.com/in/super-technology-solution-436a86330/"  className="text-primary hover:text-primary/80">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link target="_blank" href="https://www.facebook.com/supertechnology10" className="text-primary hover:text-primary/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              
              <Link target="_blank" href="#" className="text-primary hover:text-primary/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-blue-500 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  projects
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  Service Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-500">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  Branding solution
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  software applications
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  mobile applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-500">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:shakir260@gmail.com"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  supertechss@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+92-300-848-8985"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  +252 63 8313219
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Copyright © SuperTech {year}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
