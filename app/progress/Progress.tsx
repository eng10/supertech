'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

export default function Progress() {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const steps = [
    {
      number: 1,
      title: 'Project Discovery Call',
      description:
        'Party we years to order allow asked of. We so opinion friends me message as delight.',
    },
    {
      number: 2,
      title: 'Project Discovery Call',
      description:
        'His defective nor convinced residence own. Connection has put impossible own apartments boisterous.',
    },
    {
      number: 3,
      title: 'Project Discovery Call',
      description:
        'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.',
    },
  ]

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut' },
    },
  }

  return (
    <div className="min-h-screen bg-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-4">
            STOCKIE OPERATION ACROSS THE WORLD
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We have best team and best process
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
            Get Started
          </Button>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-24 mb-16" ref={containerRef}>
          <div className="hidden md:block">
            <svg
              className="absolute top-24 left-0 w-full z-10"
              viewBox={`0 0 ${width} 200`}
              preserveAspectRatio="xMidYMid meet"
              style={{ height: '200px' }}
              ref={ref}
            >
              {/* Animated Curved Path */}
              <motion.path
                d={`M 0 100 C ${width * 0.2} 50, ${width * 0.4} 150, ${
                  width * 0.5
                } 100 C ${width * 0.6} 50, ${width * 0.8} 150, ${width} 100`}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
              />
              {/* Dots */}
              {[0, width / 2, width].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy="100"
                  r="8"
                  fill="white"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.5, duration: 0.5 }}
                />
              ))}
            </svg>
          </div>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative bg-white rounded-lg p-6 transition-all duration-200 ${
                  index === 1 ? 'md:mt-48' : 'md:mt-12'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:block">
                  {/* Number */}
                  <div className="text-[100px] md:text-[200px] font-bold text-gray-50 leading-none mb-4 md:mb-0 md:absolute md:-top-16 md:-left-6 select-none">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
