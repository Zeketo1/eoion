'use client';

import { motion } from 'framer-motion';

export default function Refund() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-slate max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Refund Policy</h1>
          
          <p className="text-slate-700 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Overview</h2>
            <p className="text-slate-700 mb-4">
              At Eoion LTD, we strive to ensure complete customer satisfaction with our services. This Refund Policy outlines the terms and conditions for refunds on our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Eligibility for Refunds</h2>
            <p className="text-slate-700 mb-4">
              Refund requests will be considered under the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Service not delivered as specified in the contract</li>
              <li>Major technical issues that cannot be resolved</li>
              <li>Cancellation of service before work has commenced</li>
              <li>Duplicate charges or billing errors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Refund Process</h2>
            <p className="text-slate-700 mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 mb-4">
              <li>Contact us at info@eoion-ltd.com with your request</li>
              <li>Include your project details and reason for refund</li>
              <li>Provide any relevant documentation or evidence</li>
              <li>Allow up to 5 business days for review</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Refund Timeframes</h2>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Refund requests must be submitted within 30 days of service delivery</li>
              <li>Processing time: 5-10 business days after approval</li>
              <li>Bank processing time: Additional 3-5 business days</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Non-Refundable Items</h2>
            <p className="text-slate-700 mb-4">
              The following are generally non-refundable:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Completed and delivered custom development work</li>
              <li>Third-party service fees and licenses</li>
              <li>Services where work has substantially commenced</li>
              <li>Consultation fees and initial setup costs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Special Circumstances</h2>
            <p className="text-slate-700 mb-4">
              We evaluate special circumstances on a case-by-case basis. Please contact our customer service team to discuss your specific situation.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600">
              For questions about our refund policy, please contact us at{' '}
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
