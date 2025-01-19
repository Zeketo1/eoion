'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Code, Rocket, Layers } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

type DivElement = HTMLDivElement;

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen" ref={targetRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[grain_8s_steps(10)_infinite]"
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-blue-400 text-xl md:text-2xl font-medium tracking-wider">EOION LTD</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Building The Future of
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-blue-400"
              > SaaS
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              A tech company focused on building and scaling innovative SaaS products
              for internal ventures and external clients.
            </motion.p>
            <motion.a
              href="mailto:info@eoion-ltd.com"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-transparent hover:bg-blue-600 text-white border-2 border-blue-400 hover:border-blue-600 px-6 py-2.5 rounded-full text-lg font-semibold transition-all items-center gap-2 mx-auto group cursor-pointer"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Expertise</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg">
              As a startup studio, we specialize in ideating, developing, and launching
              cutting-edge technology solutions to empower businesses and transform industries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Code className="w-10 h-10 text-blue-600" />,
                title: "Product Development",
                description: "Building scalable SaaS solutions with cutting-edge technology"
              },
              {
                icon: <Rocket className="w-10 h-10 text-blue-600" />,
                title: "Startup Studio",
                description: "Launching and scaling innovative internal ventures"
              },
              {
                icon: <Layers className="w-10 h-10 text-blue-600" />,
                title: "Client Solutions",
                description: "Transforming businesses with custom technology solutions"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
                }}
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all transform-gpu border border-slate-100"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-700 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-900">
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Explore our portfolio of successful projects and innovative solutions that have transformed businesses across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics Platform",
                description: "Enterprise-grade analytics solution with machine learning capabilities",
                tech: ["React", "Python", "TensorFlow"],
                image: "https://picsum.photos/seed/project1/800/600"
              },
              {
                title: "Cloud Infrastructure Manager",
                description: "Automated cloud resource optimization and management platform",
                tech: ["AWS", "Node.js", "Docker"],
                image: "https://picsum.photos/seed/project2/800/600"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-64 bg-slate-800 relative overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-700 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of professionals who bring innovation and expertise to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Ikoro Samuel",
                role: "CEO & Founder",
                image: "https://picsum.photos/seed/team1/400/400"
              },
              {
                name: "Ikoro Francis",
                role: "CTO",
                image: "https://picsum.photos/seed/team2/400/400"
              },
              {
                name: "Ikoro Samuel",
                role: "Lead Developer",
                image: "https://picsum.photos/seed/team3/400/400"
              },
              {
                name: "Ikoro Jessica",
                role: "Product Manager",
                image: "https://picsum.photos/seed/team4/400/400"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-slate-900">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Hear what our clients have to say about their experience working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Eoion LTD transformed our business with their innovative solutions. Their team's expertise and dedication were exceptional.",
                author: "John Anderson",
                position: "CEO, TechCorp"
              },
              {
                quote: "Working with Eoion LTD was a game-changer for our startup. They delivered beyond our expectations.",
                author: "Sarah Williams",
                position: "Founder, InnovateTech"
              },
              {
                quote: "The team's technical expertise and professional approach made our digital transformation seamless.",
                author: "Michael Brown",
                position: "CTO, FutureSystems"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div className="relative">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 mb-6 text-lg relative z-10">{testimonial.quote}</p>
                  <div className="relative z-10">
                    <p className="font-semibold text-blue-600">{testimonial.author}</p>
                    <p className="text-slate-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Get in Touch</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ready to start your next project? Contact us today to discuss your ideas.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.a
                href="mailto:info@eoion-ltd.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-lg font-semibold transition-all items-center gap-2 cursor-pointer"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-slate-300">
                <li>No 1 Eugene Oba St</li>
                <li>Agbani Road</li>
                <li>Enugu, Enugu State, Nigeria</li>
                <li className="pt-2">
                  <a href="mailto:info@eoion-ltd.com" className="hover:text-blue-400 transition-colors">
                    info@eoion-ltd.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2347040269700" className="hover:text-blue-400 transition-colors">
                    +234 704 026 9700
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-blue-400 transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-blue-400 transition-colors">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="/terms" className="hover:text-blue-400 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-blue-400 transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="https://linkedin.com/company/eoion-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/eoionltd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/eoion-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-slate-400">
              &copy; {new Date().getFullYear()} Eoion LTD. All rights reserved. RC-8191402
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}