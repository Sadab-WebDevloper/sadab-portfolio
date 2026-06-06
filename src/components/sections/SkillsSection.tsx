'use client';
import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["Html","Css", "JavaScript","React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Nuxt.js", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express.js","Strapi", "JWT", "Bcrypt", "cookie-parser"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { category: "DevOps & Tools", items: ["Git","CI/CD", "Github Dekstop"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-foreground/60 max-w-2xl mt-4">
            A comprehensive list of technologies and tools I use to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-background border border-border hover:border-primary/50 transition-colors shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-surface text-foreground/80 border border-border/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
