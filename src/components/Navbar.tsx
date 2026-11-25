'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
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
    let rafId = 0;

    const updateScrolled = () => {
      rafId = 0;
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScrolled);
      }
    };

    updateScrolled();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sectionIds = navLinks.map((link) => link.path.substring(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-5xl mx-auto rounded-full flex items-center justify-between px-6 py-3 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
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
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-foreground bg-surface-hover border border-border/50"
                    : "text-foreground/60 hover:text-foreground hover:bg-surface border border-transparent"
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
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
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}
