import React from "react";

function Experience() {
  return (
    <section className="py-24 max-md:py-12 px-2.5">
      <div className="">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="glass rounded-3xl p-8">
          <h3 className="text-2xl font-semibold">Associate Technology 1</h3>

          <p className="text-violet-400 mt-2">
            Ayasya Digital Solutions • Apr 2023 - Apr 2026
          </p>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>
                Architected and deployed enterprise-grade web applications using{" "}
                <strong className="text-white font-medium">
                  Next.js, TypeScript, and React.js
                </strong>{" "}
                for major clients including Aditya Birla Capital and Haldiram,
                serving thousands of active users with 99.9% uptime.
              </span>
            </li>

            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>
                Optimized application performance through code splitting, lazy
                loading, and Next.js SSR/SSG, achieving{" "}
                <strong className="text-white font-medium">
                  95+ Lighthouse scores
                </strong>{" "}
                and reducing page load times by{" "}
                <strong className="text-white font-medium">45%</strong>.
              </span>
            </li>

            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>
                Engineered secure authentication systems with OTP-based
                verification and{" "}
                <strong className="text-white font-medium">
                  role-based access control (RBAC)
                </strong>
                .
              </span>
            </li>

            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>
                Implemented comprehensive SEO strategies including meta tags, OG
                tags, canonical URLs, and schema markup to achieve top search
                rankings.
              </span>
            </li>

            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>
                Integrated enterprise APIs and collaborated closely within
                cross-functional teams using Agile methodologies to improve
                frontend architecture.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
