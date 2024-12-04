"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCypress,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPrisma,
  SiTrpc,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Cypress", icon: SiCypress, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "Prisma", icon: SiPrisma, color: "text-slate-800" },
    { name: "tRPC", icon: SiTrpc, color: "text-blue-600" },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20" id="skills">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-800">Skills</h2>
          <p className="mt-4 text-lg text-blue-600">
            The skills, tools and technologies I'm really good at:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <skill.icon
                  className={`h-8 w-8 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-blue-800">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
