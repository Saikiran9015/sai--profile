import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import SectionHeading from '../ui/SectionHeading';
import { Server, Code, Brain, ShieldCheck, Code2, LineChart } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, description, color, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1500}
      className="glass-card p-8 flex flex-col items-center text-center group h-full"
    >
      <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/10 ${color}`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </Tilt>
  </motion.div>
);

const About = () => {
  const skills = [
    { title: 'AI & ML', icon: Brain, color: 'text-primary', description: 'Developing intelligent models using Scikit-learn, PyTorch, and TensorFlow with 94%+ accuracy.' },
    { title: 'Cybersecurity', icon: ShieldCheck, color: 'text-secondary', description: 'Securing systems through vulnerability assessment and implementing robust security frameworks.' },
    { title: 'Full Stack', icon: Code2, color: 'text-accent', description: 'Building scalable web applications with React, Next.js, and modern backends.' },
    { title: 'Data Science', icon: LineChart, color: 'text-neon-green', description: 'Extracting insights from complex datasets using Power BI, Tableau, and advanced SQL.' },
    { title: 'Cloud & DevOps', icon: Server, color: 'text-blue-400', description: 'Deploying and managing applications on AWS, Vercel, and Docker environment.' },
    { title: 'Problem Solving', icon: Code, color: 'text-purple-400', description: 'Algorithmic efficiency and clean code practices in Python, C++, and Java.' },
  ];

  const education = [
    { title: 'B.Tech in CS (Data Science)', date: '2023 - 2027', institution: 'Balaji Institute of Technology & Science', desc: 'Pursuing specialization in Data Science and AI.' },
    { title: 'Intermediate (MPC)', date: '2021 - 2023', institution: 'Govt. Junior College', desc: 'Completed with 64% marks.' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="The Person Behind the Code" 
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Who is <span className="text-primary italic">Abbu Saikiran</span>?
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a Computer Science student at Balaji Institute, specializing in Data Science. 
              I am passionate about building secure, intelligent systems, as seen in my work on 
              AI-based security and local LLM integrations. I combine technical skills in Python 
              and SQL with a focus on problem-solving and innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-5 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-semibold">
                Focused
              </div>
              <div className="px-5 py-2 rounded-full glass border border-accent/20 text-accent text-sm font-semibold">
                Creative
              </div>
              <div className="px-5 py-2 rounded-full glass border border-neon-green/20 text-neon-green text-sm font-semibold">
                Inquisitive
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education Timeline</h3>
            <div className="space-y-8 border-l-2 border-primary/20 pl-8 relative">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-dark-bg border-4 border-primary" />
                  <span className="text-primary font-mono text-sm mb-1 block">{edu.date}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{edu.title}</h4>
                  <p className="text-slate-400 text-sm">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mt-3">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <SectionHeading 
          title="Core Capabilities" 
          subtitle="My Tech Stack & Expertise" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
