'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Team() {
  const team = [
    {
      name: "Ikoro Samuel",
      role: "CEO & Founder",
      bio: "A visionary leader with extensive experience in software development and business strategy. Samuel leads Eoion LTD&apos;s mission to transform businesses through innovative technology solutions.",
      image: "https://picsum.photos/seed/team1/400/400"
    },
    {
      name: "Ikoro Francis",
      role: "CTO",
      bio: "An experienced technologist with deep expertise in cloud architecture and enterprise solutions. Francis drives the technical direction and innovation at Eoion LTD.",
      image: "https://picsum.photos/seed/team2/400/400"
    },
    {
      name: "Ikoro Samuel",
      role: "Lead Developer",
      bio: "A skilled software engineer with expertise in modern web technologies and cloud infrastructure. Samuel ensures the highest quality in our development processes and deliverables.",
      image: "https://picsum.photos/seed/team3/400/400"
    },
    {
      name: "Ikoro Jessica",
      role: "Product Manager",
      bio: "A strategic product leader with a focus on user experience and market needs. Jessica ensures our solutions meet and exceed client expectations.",
      image: "https://picsum.photos/seed/team4/400/400"
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
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-slate-300 mb-8">
              Meet the talented individuals driving innovation at Eoion LTD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-square">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-slate-300 mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  <motion.a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@eoion-ltd.com`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-slate-900/50 border border-slate-800 p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-slate-300 text-lg mb-8">
                We&apos;re always looking for talented individuals who are passionate about technology and innovation. 
                If you&apos;re interested in joining our team, we&apos;d love to hear from you.
              </p>
              <motion.a
                href="mailto:careers@eoion-ltd.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex bg-transparent hover:bg-blue-600 text-white border-2 border-blue-400 hover:border-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all items-center gap-2 group"
              >
                View Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
