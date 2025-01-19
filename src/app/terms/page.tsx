'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-slate max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Terms and Conditions</h1>
          
          <p className="text-slate-700 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using the services provided by Eoion LTD, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Services Description</h2>
            <p className="text-slate-700 mb-4">
              Eoion LTD provides software development, consulting, and digital transformation services. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Custom SaaS product development</li>
              <li>Digital transformation consulting</li>
              <li>Technical architecture design</li>
              <li>Cloud infrastructure optimization</li>
              <li>Enterprise software solutions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Intellectual Property Rights</h2>
            <p className="text-slate-700 mb-4">
              All intellectual property rights related to our services, products, and materials remain the property of Eoion LTD. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Software code and architecture</li>
              <li>Design elements and user interfaces</li>
              <li>Documentation and technical specifications</li>
              <li>Methodologies and processes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              Eoion LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or other harmful components</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Termination</h2>
            <p className="text-slate-700 mb-4">
              We may terminate or suspend access to our services immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600">
              For questions about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:info@eoion-ltd.com" className="text-blue-600 hover:text-blue-800">
                info@eoion-ltd.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
