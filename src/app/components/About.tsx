"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../about-me-animation.json";

export default function About() {
  return (
    <div className="bg-white text-blue-600" id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-800">About Me</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-8">
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full h-full"
                />
              )}
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-blue-800">
              Passionate Full-Stack Web Developer
            </h3>

            <p className="text-blue-600">
              I am a passionate full-stack web developer with a knack for
              crafting seamless digital experiences. Proficient in both
              front-end and back-end technologies, I thrive on building
              responsive and user-centric applications.
            </p>

            <p className="text-blue-600">
              Whether creating dynamic interfaces, designing robust APIs, or
              optimizing databases, I am committed to delivering scalable
              solutions that align with business goals. With a focus on
              continuous learning and innovation, I enjoy tackling complex
              challenges and turning ideas into reality.
            </p>

            {/* <div className="space-y-4">
              <h4 className="font-semibold text-blue-700">Key Skills:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-blue-600">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Front-end Development
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Back-end Architecture
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Database Optimization
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  API Design
                </li>
              </ul>
            </div> */}

            <div className="flex gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
