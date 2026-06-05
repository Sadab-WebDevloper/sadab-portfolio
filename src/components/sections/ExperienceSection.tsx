'use client';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex items-start gap-6"
        >
          {/* Timeline dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-background shadow shrink-0 mt-1">
            <div className="w-2 h-2 rounded-full bg-current" />
          </div>

          {/* Content Card */}
          <div className="flex-1 p-6 rounded-3xl bg-surface border border-primary/30 hover:border-primary/60 transition-colors">
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-primary font-medium text-sm">Dec 2024 – Present · 6 months</span>
              <h3 className="text-xl font-bold text-foreground">MERN Stack Developer</h3>
              <h4 className="text-foreground/60 text-sm font-medium">Junkies Coders</h4>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Building and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js. 
              Developing responsive user interfaces, designing RESTful APIs, integrating third-party services, 
              and collaborating with the team on feature planning and code reviews to deliver production-ready products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

