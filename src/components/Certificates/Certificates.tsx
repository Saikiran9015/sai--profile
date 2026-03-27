import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const certificates = [
  {
    title: 'Fundamentals of Generative AI',
    date: 'January 2025',
    issuer: 'SAWIT.AI / Google Women Techmakers',
    description: 'Completed Generative AI fundamentals through the Learnathon program supported by HCLTech and AICTE.',
    link: '#'
  },
  {
    title: 'Cyber Security and Ethical Hacking',
    date: 'June 2024',
    issuer: 'Internship / Practical Training',
    description: '3-month program covering core cybersecurity concepts and hands-on ethical hacking techniques.',
    link: '#'
  },
  {
    title: 'Microsoft Azure AI Fundamentals',
    date: 'March 2024',
    issuer: 'Microsoft',
    description: 'Acquired foundational knowledge of AI concepts and Azure AI services like Machine Learning and Bot Services.',
    link: '#'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Certifications" 
          subtitle="Validated Expertise & Learning" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl -z-10 group-hover:bg-primary/20 transition-colors" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                  <Calendar className="w-3 h-3" /> {cert.date}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-secondary text-sm font-medium mb-4">{cert.issuer}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              <a 
                href={cert.link} 
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
