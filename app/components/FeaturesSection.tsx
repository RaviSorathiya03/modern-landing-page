"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, Smartphone, BarChart3, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, ensuring your data is always protected.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamlessly designed for mobile devices with responsive layouts and touch-optimized interfaces.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain deep insights with comprehensive analytics and real-time reporting dashboards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together effortlessly with real-time collaboration tools and shared workspaces.",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "Scale from startup to enterprise with our flexible architecture and unlimited potential.",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your workflow, boost productivity, and achieve exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
