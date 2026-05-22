import React from "react";

function About() {
  return (
    <section id="about" className="py-24 max-md:py-12  px-2.5">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-8 text-lg">
          I'm a software developer focused on building scalable and
          high-performance applications using modern JavaScript technologies.
          Over the last 3 years, I've worked on enterprise-grade solutions
          involving Next.js, React, AEM, Strapi, PostgreSQL, and GraphQL.
        </p>
      </div>
    </section>
  );
}

export default About;
