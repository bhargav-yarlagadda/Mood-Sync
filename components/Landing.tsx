'use client';

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Landing = () => {
    const router = useRouter()
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col h-screen items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-blue-100 to-teal-100">
        <motion.h1
          className="text-5xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sync Your Creativity with <span className="text-teal-500">MoodSync</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          A revolutionary code editor that adapts to your mood, helping you code better, faster, and smarter.
        </motion.p>
        <motion.button
        onClick={()=>[
            router.push('/editor')
        ]}
          className="mt-8 px-10 py-4 bg-blue-600 rounded-xl text-lg text-white hover:bg-blue-500 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Start Your Journey
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-100 via-white to-gray-100">
  <h2 className="text-4xl font-semibold text-center text-blue-700 mb-12 tracking-wide">
    Features That Elevate Your Experience
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
    {[ 
      { title: "Mood Detection", desc: "Detect your mood and adapt the UI to help you focus or get energized." },
      { title: "Smart UI", desc: "The interface automatically changes to match your emotional state, optimizing your workflow." },
      { title: "Emotion Insights", desc: "Gain insights into your emotional journey while you code, helping you improve your productivity." },
    ].map((feature, index) => (
      <motion.div
        key={index}
        className="p-10 bg-sky-200 rounded-xl shadow-2xl hover:shadow-3xl transition duration-300 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{feature.title}</h3>
        <p className="text-lg text-gray-700">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Call to Action (CTA) */}


      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-500 border-t">
        <p className="text-sm">Crafted with passion by <span className="text-white">@bhargav</span>. <span className="text-red-500">&copy; </span>2025  All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
