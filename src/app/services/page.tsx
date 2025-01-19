'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Lock, Cpu, BarChart, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Custom SaaS Development",
      description: "End-to-end development of scalable SaaS solutions tailored to your business needs. We handle everything from architecture to deployment.",
      features: [
        "Custom software architecture",
        "Scalable cloud infrastructure",
        "Modern user interfaces",
        "API development and integration"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise software solutions that streamline operations and boost productivity across your organization.",
      features: [
        "Business process automation",
        "Data management systems",
        "Enterprise integration",
        "Legacy system modernization"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Cloud Infrastructure",
      description: "Expert cloud infrastructure design and management to ensure your applications are scalable, secure, and cost-effective.",
      features: [
        "Cloud architecture design",
        "Migration services",
        "Performance optimization",
        "Cost management"
      ]
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: "Security Solutions",
      description: "Robust security implementations to protect your applications and data from modern cyber threats.",
      features: [
        "Security audits",
        "Authentication systems",
        "Data encryption",
        "Compliance implementation"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business processes and technology stack.",
      features: [
        "Technology assessment",
        "Digital strategy development",
        "Process optimization",
        "Change management"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: "Analytics & Insights",
      description: "Data analytics solutions that help you make informed decisions and drive business growth.",
      features: [
        "Business intelligence",
        "Custom dashboards",
        "Data visualization",
        "Predictive analytics"
      ]
    }
  ];

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive technology solutions to power your business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors group"
              >
                <div className="mb-6 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Contact us to discuss how we can help transform your business with our technology solutions.
            </p>
            <motion.a
              href="mailto:info@eoion-ltd.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-transparent hover:bg-blue-600 text-white border-2 border-blue-400 hover:border-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all items-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
