"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-violet-400 mb-4"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-bold leading-tight"
          >
            Hi, I'm {" "}
            <span className="gradient-text">{" "} Jappreet Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 text-lg"
          >
            A Software Developer 3+ years of experience in delivering scalable digital products using
            React, Next, GraphQL, Node, Express, Headless CMS and modern web technologies.
          </motion.p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
            >
              View Projects
            </a>

            <a
              href="/jappreetcv"
              download={true}
              className="px-6 py-3 rounded-xl border border-white/20"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-3xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
