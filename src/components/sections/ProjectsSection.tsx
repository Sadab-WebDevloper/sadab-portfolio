'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const projects = [
  {
    title: "Jobify",
    description: "A full-stack job board platform where recruiters can post jobs and candidates can apply. Features include application tracking and an admin dashboard.",
    image: "jobify.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://jobify-umber.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "UrbanKick",
    description: "A modern full-stack e-commerce platform for sneakers, featuring user authentication, dynamic product management, a seamless shopping cart, and secure checkout.",
    image: "urbankick.png",
    tech: ["React","Tailwind CSS", "Node.js", "MongoDB", "Express.js", "JWT"],
    liveUrl: "https://urbankick.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "Food Website",
    description: "A premium restaurant web application featuring an interactive menu, seamless shopping cart functionality, dynamic table reservations, and rich, fluid animations for a modern user experience.",
    image: "foodwebsite.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://food-website-pi-ten.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "Charity Website",
    description: "",
    image: "charity.png",
    tech: ["Nuxt.js","Vue.js","TypeScript","Tailwind CSS","Framer Motion"],
    liveUrl: "https://charity-website-murex.vercel.app/",
    githubUrl: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-foreground/60 max-w-2xl mt-4">
            A selection of my recent work. These projects showcase my ability to build full-stack applications from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-background border border-border overflow-hidden hover:border-primary/50 transition-colors shadow-lg flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-surface">
                {/* Fallback gradient if image fails */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-background" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 flex-1">
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
                  <Link href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
