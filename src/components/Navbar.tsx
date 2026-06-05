'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { title: 'Home', path: '#hero' },
  { title: 'About', path: '#about' },
  { title: 'Skills', path: '#skills' },
  { title: 'Experience', path: '#experience' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.path.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-5xl mx-auto rounded-full flex items-center justify-between px-6 py-3 transition-all duration-300",
        isScrolled 
          ? "bg-surface/60 backdrop-blur-md border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
          : "bg-transparent"
      )}>
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
          <span className="text-foreground font-bold text-lg tracking-wide group-hover:text-primary transition-colors duration-300">
            Sadab<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.substring(1);
            return (
              <Link 
                key={link.title} 
                href={link.path}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground hover:bg-surface"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-surface-hover border border-border/50 -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-2 p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl md:hidden flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground/80 font-medium hover:bg-surface hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
