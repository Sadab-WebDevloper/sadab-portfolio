'use client';
import { m } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  role: string;
  badge: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  points: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'MERN Stack Developer',
    badge: 'Internship',
    company: 'Junkies Coders App Development Company',
    location: 'Himmatnagar, Gujarat',
    period: 'Dec 2025 · 9 Months',
    points: [
      'Architected and built the company web platform from scratch using Next.js (SSR & SSG) for high performance and SEO optimization.',
      'Integrated Strapi headless CMS with structured REST APIs to power dynamic blogs, service listings, and media assets.',
      'Developed reusable, type-safe React & TypeScript components from Figma designs with Tailwind CSS and clean Git feature-branch workflows.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Strapi CMS', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'MERN Stack Developer Intern',
    badge: 'Internship',
    company: 'Xipra Technology',
    location: 'Himmatnagar, Gujarat',
    period: 'May 2025 · 6 Months',
    points: [
      'Developed the full-stack Jobify job portal using MongoDB, Express.js, React.js, and Node.js with authentication, job CRUD, and application tracking.',
      'Designed RESTful Express.js APIs backed by MongoDB and Mongoose schemas with request validation.',
      'Built responsive React interfaces using React Router, custom hooks, Context API, and Tailwind CSS alongside interactive JavaScript DOM projects.',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    role: 'Web Developer Intern',
    badge: 'Summer Internship',
    company: 'UV Techsoft',
    location: 'Himmatnagar, Gujarat',
    period: 'May 2024 · Summer Internship',
    points: [
      'Built a Tour and Travel Management System frontend covering booking flows and itinerary management.',
      'Implemented dynamic UI components and responsive cross-device layouts using core web technologies.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </m.div>

        <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary/50 before:to-border">
          {experiences.map((exp, idx) => (
            <m.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative flex items-start gap-6"
            >
              {/* Timeline dot */}
              <div
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shadow shrink-0 mt-1 ${
                  exp.isCurrent
                    ? 'bg-primary text-background'
                    : 'bg-surface border-border text-primary'
                }`}
              >
                <Briefcase size={15} />
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 p-6 rounded-3xl bg-surface border transition-colors ${
                  exp.isCurrent
                    ? 'border-primary/40 hover:border-primary/70'
                    : 'border-border hover:border-primary/40'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.isCurrent
                        ? 'bg-primary/15 text-primary border border-primary/30'
                        : 'bg-secondary/15 text-secondary border border-secondary/30'
                    }`}
                  >
                    {exp.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60">
                    <Calendar size={13} className="text-primary" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 mb-4 text-sm text-foreground/65">
                  <span className="font-medium text-foreground/85">{exp.company}</span>
                  <span className="inline-flex items-center gap-1 text-foreground/55">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 text-foreground/80 text-sm leading-relaxed mb-4 list-disc list-inside">
                  {exp.points.map((point, pointIdx) => (
                    <li key={pointIdx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-background/70 text-primary border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
