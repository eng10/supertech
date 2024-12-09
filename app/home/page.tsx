import Head from "next/head"; // Import Head for SEO
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  Code,
  MonitorCheck,
  Smartphone,
  Target,
} from "lucide-react";

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
        "bg-white rounded-xl p-4 shadow-lg flex items-center gap-3",
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
        className="absolute top-4 right-4 md:top-8 md:right-16"
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
        className="absolute bottom-4 right-4 md:bottom-16 md:right-8"
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

export default function Component() {
  return (
    <>
      {/* SEO Tags */}
      <Head>
        <title>Empowering Your Vision | SuperTech Solutions</title>
        <meta
          name="description"
          content="At SuperTech Solutions, we craft unique brands, build innovative web and mobile apps, and help businesses grow. Let's create something special together!"
        />
        <meta
          name="keywords"
          content="branding, web applications, mobile applications, innovative solutions, SuperTech Solutions"
        />
        <meta name="author" content="SuperTech Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Empowering Your Vision | SuperTech Solutions"
        />
        <meta
          property="og:description"
          content="At SuperTech Solutions, we craft unique brands, build innovative web and mobile apps, and help businesses grow."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.supertechss.com/" />
        <meta
          property="og:image"
          content="https://www.supertechss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FiconLogo.a2afb7fa.png&w=96&q=75"
        />
        {/* Add Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SuperTech Solutions",
              "url": "https://www.supertechss.com",
              "logo": "https://www.supertechss.com/logo.png",
              "description":
                "Innovative SEO and branding solutions with cutting-edge web and mobile apps.",
              "sameAs": [
                "https://www.linkedin.com/company/supertechsolutions",
                "https://twitter.com/supertechsolutions",
              ],
            }),
          }}
        />
      </Head>

      <div className="bg-[#E8E9F5] flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
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
                  {`At SuperTech Solutions, we turn your ideas into reality.
                  Whether it's crafting a unique brand or building innovative
                  web and mobile apps, we're here to help grow your business and
                  connect you with the people that matter most. Let's create
                  something special together!`}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href="/projects"
                  className="inline-flex items-center bg-blue-500 text-white py-3 px-3 rounded-[6px] font-medium hover:bg-blue-400 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>

              <div className="relative h-[400px] mt-8 md:mt-0">
                <AnimatedCircleLine />
                <FloatingIcons />

                <div className="absolute inset-0 flex flex-col md:block justify-center items-center gap-4 md:gap-0">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="md:absolute md:top-4 md:left-1/4 md:-translate-x-1/2"
                  >
                    <FloatingCard title="Branding" icon={Target} delay={0.3} />
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
                    className="md:absolute md:top-1/2 md:right-4"
                  >
                    <FloatingCard
                      title="Web Applications"
                      icon={MonitorCheck}
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
                    className="md:absolute md:bottom-8 md:left-8"
                  >
                    <FloatingCard
                      title="Mobile Applications"
                      icon={Smartphone}
                      delay={0.5}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
