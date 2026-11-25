import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'));
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'));
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const ResumeSection = dynamic(() => import('@/components/sections/ResumeSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
