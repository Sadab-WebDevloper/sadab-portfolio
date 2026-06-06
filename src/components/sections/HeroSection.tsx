'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Sadab</span>
            <br />
            <span className="text-foreground/80">Full Stack Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed">
            I craft premium, high-performance web applications with modern technologies. Bridging the gap between design and robust engineering.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link 
              href="#projects"
              className="px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <a 
              href="/Sadab_Mamu_Resume.pdf"
              target="_blank"
              download
              className="px-8 py-4 rounded-full bg-surface border border-border text-foreground font-semibold hover:bg-surface-hover hover:scale-105 transition-all flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center w-full mt-12 lg:mt-0"
        >
          {/* Decorative glowing blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full -z-10 mix-blend-screen" />
          
          {/* Professional Code Editor Card Design */}
          <div className="relative w-full max-w-lg">
            {/* Background blur card */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl transform scale-95 opacity-50 rounded-3xl" />
            
            {/* Main Editor Window */}
            <div className="relative bg-[#0d1117] border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 transform transition-transform hover:scale-[1.02] duration-500">
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-border/30 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs font-mono text-foreground/50">developer.js</div>
              </div>
              
              {/* Code Content */}
              <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-hidden">
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">1</span>
                  <span className="text-purple-400">const</span> <span className="text-blue-400 ml-2">developer</span> <span className="text-foreground/80 ml-2">=</span> <span className="text-yellow-300 ml-2">{`{`}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">2</span>
                  <span className="text-foreground/80 ml-4">name:</span> <span className="text-green-400 ml-2">'Sadab Mamu'</span><span className="text-foreground/80">,</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">3</span>
                  <span className="text-foreground/80 ml-4">role:</span> <span className="text-green-400 ml-2">'MERN Stack Developer'</span><span className="text-foreground/80">,</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">4</span>
                  <span className="text-foreground/80 ml-4">skills:</span> <span className="text-yellow-300 ml-2">[</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">5</span>
                  <div className="flex flex-wrap text-green-400 ml-8">
                    <span>'React'</span><span className="text-foreground/80 mr-2">,</span>
                    <span>'Next.js'</span><span className="text-foreground/80 mr-2">,</span>
                    <span>'JavaScript'</span><span className="text-foreground/80 mr-2">,</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">6</span>
                  <div className="flex flex-wrap text-green-400 ml-8">
                    <span>'Express'</span><span className="text-foreground/80 mr-2">,</span>
                    <span>'Node.js'</span><span className="text-foreground/80 mr-2">,</span>
                    <span>'MongoDB'</span><span className="text-foreground/80 mr-2">,</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">7</span>
                  <div className="flex flex-wrap text-green-400 ml-8">
                    <span>'Tailwind CSS'</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">8</span>
                  <span className="text-yellow-300 ml-4">]</span><span className="text-foreground/80">,</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">9</span>
                  <span className="text-foreground/80 ml-4">hardWorker:</span> <span className="text-orange-400 ml-2">true</span><span className="text-foreground/80">,</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">10</span>
                  <span className="text-foreground/80 ml-4">problemSolver:</span> <span className="text-orange-400 ml-2">true</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 select-none pr-4 text-right w-8 flex-shrink-0">11</span>
                  <span className="text-yellow-300">{`}`}</span><span className="text-foreground/80">;</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-right-10 p-4 rounded-2xl bg-surface/80 border border-border shadow-xl backdrop-blur-md z-20 hidden md:block"
            >
              <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                100% Client Satisfaction
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 md:-left-12 p-4 rounded-2xl bg-surface/80 border border-border shadow-xl backdrop-blur-md z-20 flex items-center gap-3 hidden md:flex"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                ✨
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">Premium Quality</span>
                <span className="text-xs text-foreground/60">Pixel Perfect Design</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
