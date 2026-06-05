'use client';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Resume & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-surface border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="text-primary" /> Education
            </h3>
            
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <h4 className="text-lg font-bold text-foreground">B.Tech of Computer Science & Design</h4>
                <p className="text-primary text-sm font-medium mb-2">A.D. Patel Institute of Technology, Anand • 2022 - 2025</p>
                <p className="text-foreground/70 text-sm">Focused on software development, UI/UX design, and computer science fundamentals.</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <h4 className="text-lg font-bold text-foreground">Diploma Computer Engineering</h4>
                <p className="text-primary text-sm font-medium mb-2">Kilachand Devchand Polytechnic, Patan • 2019 - 2022</p>
                <p className="text-foreground/70 text-sm">Foundational knowledge in computer engineering, programming, and system design.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold mb-2">Why Hire Me?</h3>
            <ul className="space-y-4 text-foreground/80">
              {['Proven track record of delivering scalable apps', 'Strong problem-solving and analytical skills', 'Excellent communication and teamwork', 'Continuous learner staying up-to-date with tech'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <a 
                href="/Sadab_Mamu_Resume.pdf" 
                target="_blank"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:-translate-y-1"
              >
                <Download size={20} /> Download Full Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
