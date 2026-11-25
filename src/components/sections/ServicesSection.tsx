'use client';
import { m } from 'framer-motion';
import { Code2, Smartphone, Layout, Database, Terminal, Server } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Web Development",
    description: "Building responsive, fast, and SEO-friendly websites using modern frameworks like React and Next.js."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with React Native that provide native-like experiences."
  },
  {
    icon: <Layout size={32} />,
    title: "UI/UX Development",
    description: "Translating design prototypes into pixel-perfect, interactive, and accessible user interfaces."
  },
  {
    icon: <Database size={32} />,
    title: "API Integration",
    description: "Designing and integrating robust RESTful and GraphQL APIs to connect systems seamlessly."
  },
  {
    icon: <Server size={32} />,
    title: "Backend Architecture",
    description: "Building secure, scalable server-side applications and databases using Node.js and PostgreSQL."
  },
  {
    icon: <Terminal size={32} />,
    title: "Custom Software",
    description: "Developing tailored software solutions to solve specific business problems and automate workflows."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.24) }}
              className="group p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:bg-surface-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
