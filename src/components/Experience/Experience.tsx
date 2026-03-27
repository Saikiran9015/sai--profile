import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceItem = ({ role, company, location, date, description, index }: any) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-12 w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 to-accent/50 hidden md:block" />
      
      {/* Glowing Node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-dark-bg border-4 border-primary z-10 hidden md:block shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full md:w-[45%] glass-card p-6 md:p-8 hover:border-primary/40 group"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{role}</h3>
          <span className="flex items-center gap-1 text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <Calendar className="w-3 h-3" /> {date}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-6">
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            <Briefcase className="w-4 h-4 text-accent" /> {company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> {location}
          </span>
        </div>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </motion.div>

      {/* Spacer for MD screens */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: 'Developer',
      company: 'LINK',
      location: 'Remote',
      date: 'Jan 2025 - Present',
      description: 'Designed and developed a comprehensive digital security system focused on threat detection. Implemented AI-based malware detection and integrated local LLMs like LLaMA 2.',
      skills: ['Flutter', 'Python', 'PostgreSQL', 'MongoDB', 'AI']
    },
    {
      role: 'Cyber Security Internship',
      company: 'Confidential',
      location: 'India',
      date: 'March 2024 - June 2024',
      description: 'Gained hands-on experience in ethical hacking and vulnerability assessment. Completed a 3-month intensive program.',
      skills: ['Ethical Hacking', 'Networking', 'Security Audit']
    },
    {
      role: 'Full Stack AI Developer',
      company: 'Freelance / Open Source',
      location: 'Remote',
      date: '2024 - Present',
      description: 'Architecting end-to-end AI applications, integrating LLMs with modern web stacks, and optimizing performance for high-traffic sites like Claufe.in.'
    },
    {
      role: 'Cybersecurity Analyst',
      company: 'Research Project',
      location: 'Hyderabad, IN',
      date: '2023 - 2024',
      description: 'Developed automated vulnerability scanning tools and implemented zero-trust security architectures for enterprise-level farmer platforms.'
    },
    {
      role: 'Machine Learning Engineer Intern',
      company: 'Tech Innovations Lab',
      location: 'Bengaluru, IN',
      date: '2022 - 2023',
      description: 'Collaborated on training deep learning models for medical anomaly detection, achieving a 94% accuracy rate on specialized datasets.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="Education & Experience" 
        />

        <div className="relative mt-20">
          {/* Mobile Line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20 md:hidden ml-1" />
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
