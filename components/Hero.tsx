"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-[80vh] w-full bg-gradient-to-br text-black">
      
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left px-6 md:px-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I’m Rayan{" "}
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Computer Science Student & Aspiring Software Engineer
        </p>
        <div className="space-x-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="/Rayan_Sheikh_CV.pdf"
            className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:scale-105 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0 px-6 md:px-0">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-200">
          <img
            src="/profile.jpg" 
            alt="Rayan Sheikh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
