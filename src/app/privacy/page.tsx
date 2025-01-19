'use client';

import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-slate max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
          
          <p className="text-slate-700 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Introduction</h2>
            <p className="text-slate-700 mb-4">
              Eoion LTD (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <p className="text-slate-700 mb-4">
              We may collect personal information that you provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business information</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Technical Information</h3>
            <p className="text-slate-700 mb-4">
              We may automatically collect certain information when you use our services, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Providing and maintaining our services</li>
              <li>Communicating with you about our services</li>
              <li>Improving our services</li>
              <li>Complying with legal obligations</li>
              <li>Detecting and preventing fraud</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Your Rights</h2>
            <p className="text-slate-700 mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy or our practices, please contact us at:
            </p>
            <ul className="list-none space-y-2 text-slate-700">
              <li><strong>Email:</strong> info@eoion-ltd.com</li>
              <li><strong>Address:</strong> No 1 Eugene Oba St, Agbani Road, Enugu, Enugu State, Nigeria</li>
              <li><strong>Phone:</strong> +2347040269700</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
