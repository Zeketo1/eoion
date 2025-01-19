'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
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
            <h1 className="text-5xl font-bold mb-6">About Eoion LTD</h1>
            <p className="text-xl text-slate-300 mb-8">
              Building the future of technology through innovation and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                Eoion LTD was founded with a vision to transform businesses through innovative technology solutions. 
                As a dynamic tech company, we specialize in building and scaling SaaS products that drive business growth 
                and efficiency.
              </p>
              <p>
                Our journey began with a simple mission: to make powerful technology accessible to businesses of all sizes. 
                Today, we&apos;re proud to be at the forefront of digital transformation, helping companies navigate the 
                ever-evolving technological landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 p-8 rounded-xl border border-slate-800"
              >
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-slate-300">
                  We constantly push boundaries to create cutting-edge solutions that address real-world challenges.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 p-8 rounded-xl border border-slate-800"
              >
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-slate-300">
                  We maintain the highest standards in everything we do, from code quality to customer service.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 p-8 rounded-xl border border-slate-800"
              >
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-slate-300">
                  We work closely with our clients to ensure solutions that perfectly match their needs.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 p-8 rounded-xl border border-slate-800"
              >
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-slate-300">
                  We believe in transparency, honesty, and ethical business practices in all our dealings.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl"
              >
                <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-slate-300">Deep technical expertise and industry knowledge</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl"
              >
                <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-slate-300">History of successful project deliveries</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl"
              >
                <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Focus</h3>
                  <p className="text-slate-300">
                    Commitment to delivering excellence in every project
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl"
              >
                <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Long-term Partnership</h3>
                  <p className="text-slate-300">
                    Building lasting relationships with our clients
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Contact us to discuss how we can help your business grow with our innovative solutions.
            </p>
            <motion.a
              href="mailto:info@eoion-ltd.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-transparent hover:bg-blue-600 text-white border-2 border-blue-400 hover:border-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all items-center gap-2 mx-auto group"
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
