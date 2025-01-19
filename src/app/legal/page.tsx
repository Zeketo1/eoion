'use client';

import { motion } from 'framer-motion';

export default function Legal() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-slate max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Legal Information</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Company Details</h2>
            <p className="text-slate-700">
              Eoion LTD is a registered technology company specializing in SaaS development and digital transformation.
            </p>
            <ul className="list-none space-y-2 text-slate-700">
              <li><strong>Registered Address:</strong> No 1 Eugene Oba St, Agbani Road, Enugu, Enugu State, Nigeria</li>
              <li><strong>Email:</strong> info@eoion-ltd.com</li>
              <li><strong>Phone:</strong> +2347040269700</li>
              <li><strong>Registration Number:</strong> RC-8191402</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Terms and Conditions</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using the services provided by Eoion LTD, you agree to be bound by these terms and conditions.
            </p>
            <h3 className="text-xl font-semibold mb-2">1. Services</h3>
            <p className="text-slate-700 mb-4">
              Eoion LTD provides software development, consulting, and digital transformation services. All services are provided "as is" and subject to these terms.
            </p>
            <h3 className="text-xl font-semibold mb-2">2. Intellectual Property</h3>
            <p className="text-slate-700 mb-4">
              All intellectual property rights related to our services and products remain the property of Eoion LTD unless explicitly stated otherwise in a written agreement.
            </p>
            <h3 className="text-xl font-semibold mb-2">3. Liability</h3>
            <p className="text-slate-700 mb-4">
              Eoion LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Privacy Policy</h2>
            <p className="text-slate-700 mb-4">
              Eoion LTD is committed to protecting your privacy and handling your data with transparency.
            </p>
            <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
            <p className="text-slate-700 mb-4">
              We collect and process personal data necessary for providing our services, including but not limited to name, email address, and business information.
            </p>
            <h3 className="text-xl font-semibold mb-2">Data Usage</h3>
            <p className="text-slate-700 mb-4">
              Your data is used solely for providing and improving our services, communicating with you, and complying with legal obligations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Refund Policy</h2>
            <p className="text-slate-700 mb-4">
              Our refund policy aims to ensure customer satisfaction while maintaining fair business practices.
            </p>
            <ul className="list-disc pl-6 text-slate-700">
              <li>Refund requests must be submitted within 30 days of service delivery</li>
              <li>Custom development projects are evaluated on a case-by-case basis</li>
              <li>Refunds are processed within 14 business days</li>
              <li>Service fees and third-party costs may be non-refundable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Business Description</h2>
            <p className="text-slate-700 mb-4">
              Eoion LTD is a technology company specializing in building and scaling innovative SaaS products. Our core activities include:
            </p>
            <ul className="list-disc pl-6 text-slate-700">
              <li>Custom SaaS product development</li>
              <li>Digital transformation consulting</li>
              <li>Technical architecture design</li>
              <li>Cloud infrastructure optimization</li>
              <li>Enterprise software solutions</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
