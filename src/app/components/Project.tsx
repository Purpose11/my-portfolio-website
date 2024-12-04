"use client";

import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "TecHill Academy Website & LMS",
      description:
        "A modern website and Learning Management System with admin and student dashboards. Designed to manage courses, track progress, and support tech learners seamlessly.",
      image: "/images/techill.png",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      link: "https://www.techill.ng/",
    },
    {
      title: "NFT Marketplace Website",
      description:
        "A modern NFT marketplace website for exploring, buying, and selling digital art, featuring a sleek UI, artist rankings, and wallet connection options.",
      image: "/images/nft.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://nft-marketplace101.netlify.app/",
    },
    {
      title: "TecHill Academy Landing Page",
      description:
        "A compelling landing page for TecHill Academy, showcasing 15 online courses, expert tutors, and over 200 satisfied students. Designed to inspire learners to gain real tech skills and become specialists, with a promotional offer to get started today.",
      image: "/images/landing.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://www.techill.ng/main",
    },
    {
      title: "TrailerFlix",
      description:
        "TrailerFlix is a dynamic movie web app that lets users discover new films, watch trailers, and access detailed movie information like genres, release dates, and cast. Stay updated and explore movies with ease.",
      image: "/images/movie.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
      link: "https://trailerflix-lime.vercel.app/",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20" id="projects">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-800">Projects</h2>
          <p className="mt-4 text-lg text-blue-600">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border border-blue-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-blue-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-blue-800">
                    {project.title}
                  </CardTitle>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <CardDescription className="text-blue-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
