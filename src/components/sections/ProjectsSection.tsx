'use client';
import { m } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Jobify",
    description: "A full-stack job board platform where recruiters can post jobs and candidates can apply. Features include application tracking and an admin dashboard.",
    image: "/jobify.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://jobify-umber.vercel.app/",
  },
  {
    title: "UrbanKick",
    description: "A modern full-stack e-commerce platform for sneakers, featuring user authentication, dynamic product management, a seamless shopping cart, and secure checkout.",
    image: "/urbankick.png",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "JWT"],
    liveUrl: "https://urbankick.vercel.app/",
  },
  {
    title: "Food Website",
    description: "A premium restaurant web application featuring an interactive menu, seamless shopping cart functionality, dynamic table reservations, and rich, fluid animations for a modern user experience.",
    image: "/foodwebsite.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://food-website-pi-ten.vercel.app/",
  },
  {
    title: "Charity Website",
    description: "A premium charity web application featuring interactive donation causes, an engaging upcoming events tracker, dynamic scroll animations, and a comprehensive media gallery.",
    image: "/charity.png",
    tech: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://charity-website-murex.vercel.app/",
  },
  {
    title: "Fresh Mart",
    description: "A modern online grocery platform for fresh produce, featuring interactive shopping carts, smooth animations, and responsive design built on Next.js.",
    image: "/freshmart.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    liveUrl: "https://fresh-mart-iota-one.vercel.app/",
  },
  {
    title: "Bubble Game",
    description: "An interactive, browser-based typing and reflex game where players pop dynamically generated bubbles before they escape, featuring a sleek modern design.",
    image: "/bubblegame.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bubble-attack.netlify.app/",
  },
  {
    title: "Neon Wave",
    description: "A premium music streaming web application featuring a stunning dark-themed interface. It includes seamless audio playback controls, custom playlist creation, a 'liked songs' collection, and a fully responsive mobile design powered by Redux for smooth state management.",
    image: "/NeonWave.png",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Vite"],
    liveUrl: "https://neon-wave-six.vercel.app/",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-foreground/60 max-w-2xl mt-4">
            A selection of my recent work. These projects showcase my ability to build full-stack applications from concept to deployment.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.24) }}
              className="group rounded-3xl bg-background border border-border overflow-hidden hover:border-primary/50 transition-colors shadow-lg flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-background" />
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-surface text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
