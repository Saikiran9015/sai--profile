import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Code, Maximize2, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'SYBRAI',
    category: 'AI | Security',
    description: 'AI-based malware detection and real-time intrusion prevention system with 94% accuracy.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'AI', 'Security', 'MongoDB'],
    link: 'https://www.sybrai.com/',
    github: 'https://github.com/abbusaikiran/',
    details: 'Achieved 94% accuracy in intrusion detection using anomaly detection. Real-time network monitoring and system health dashboard.'
  },
  {
    id: 2,
    title: 'Claufe',
    category: 'E-commerce Platform',
    description: 'E-commerce platform for selling and buying products.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://www.claufe.in/',
    github: 'https://github.com/abbusaikiran/',
    details: 'Claufe is an e-commerce platform for selling and buying products. It is built with React, Node.js, MongoDB, and Stripe. It has a user-friendly interface and a wide range of products to choose from. It also has a secure payment system and a reliable delivery network.'
  }
];

const ProjectCard = ({ project, onExpand }: any) => (
  <motion.div
    layoutId={`project-${project.id}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1500}
      scale={1.02}
      className="h-full"
    >
      <div className="glass-card overflow-hidden group h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
          <button 
            onClick={() => onExpand(project)}
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <span className="text-primary font-mono text-xs mb-2">{project.category}</span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-glow transition-all">{project.title}</h3>
          <p className="text-slate-400 text-sm line-clamp-2 mb-6">{project.description}</p>
          
          <div className="mt-auto flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10 uppercase tracking-widest">{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={project.link} className="flex items-center gap-1 text-xs font-bold text-white hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
              <Code className="w-5 h-5" /> View Code
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A Glimpse into My Work" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onExpand={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-dark-bg border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <span className="text-primary font-mono text-sm mb-2">{selectedProject.category}</span>
                <h3 className="text-4xl font-bold text-white mb-6">{selectedProject.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Tech Used:</h4>
                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">{tag}</span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a href={selectedProject.link} className="flex-1 px-6 py-3 bg-primary text-white rounded-xl text-center font-bold hover:bg-primary/80 transition-colors">
                    Visit Site
                  </a>
                  <a href={selectedProject.github} className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-center font-bold hover:bg-white/10 transition-colors">
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
