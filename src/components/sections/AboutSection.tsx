'use client';
import { m } from 'framer-motion';
import { Code, Database, Layers, LayoutGrid, Server, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Layers,
    title: 'System Architecture',
    desc: 'Modular APIs, auth flows & scalable data models',
  },
  {
    icon: LayoutGrid,
    title: 'Design Systems',
    desc: 'Reusable UI components, accessibility & consistency',
  },
  {
    icon: Code,
    title: 'Scalable Products',
    desc: 'End-to-end Next.js, React & TypeScript builds',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Node.js, Express, REST APIs & service integrations',
  },
  {
    icon: Database,
    title: 'Data & Storage',
    desc: 'MongoDB, PostgreSQL, MySQL & Supabase',
  },
  {
    icon: Zap,
    title: 'Web Performance',
    desc: 'Core Web Vitals, caching & bundle optimization',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </m.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/80 space-y-5 text-base md:text-lg leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-foreground font-semibold">Mohmad Sadab Mamu</span>, a Full Stack Engineer focused on architecting <span className="text-foreground font-medium">scalable web products</span>, resilient backend systems, and cohesive digital experiences from concept to production.
            </p>
            <p>
              With strong expertise across the MERN stack, Next.js, TypeScript, and relational/NoSQL databases, I design modular <span className="text-foreground font-medium">system architectures</span> with clear separation of concerns—covering API design, authentication flows, state management, and structured data modeling built to grow alongside user demand.
            </p>
            <p>
              On the frontend, I translate complex product requirements into <span className="text-foreground font-medium">reusable design systems</span> and responsive, accessible interfaces. I prioritize Core Web Vitals, clean maintainable code, and automated CI/CD workflows so every release remains fast, reliable, and easy to evolve.
            </p>
            <p>
              Whether collaborating with cross-functional teams or driving end-to-end product builds, I combine pragmatic engineering judgment with a continuous commitment to modern web standards.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <m.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="group p-5 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-colors duration-300 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-snug">{item.desc}</p>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
