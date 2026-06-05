'use client';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Zap } from 'lucide-react';

const highlights = [
  { icon: Code, title: 'Frontend', desc: 'React, Next.js, Tailwind CSS' },
  { icon: Server, title: 'Backend', desc: 'Node.js, Express, MongoDB' },
  { icon: Smartphone, title: 'Responsive', desc: 'Mobile-first design' },
  { icon: Zap, title: 'Performance', desc: 'Fast & optimized apps' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/80 space-y-6 text-lg leading-relaxed"
          >
            <p>
              Hello! I&apos;m Sadab, a passionate software engineer specializing in building exceptional digital experiences. With a strong foundation in both front-end and back-end technologies, I enjoy transforming complex problems into elegant, intuitive interfaces.
            </p>
            <p>
              My journey in tech started with a curiosity for how things work on the internet, which quickly evolved into a career of continuous learning and creation. I strive to write clean, maintainable code and build scalable architectures.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source, or sharing my knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

