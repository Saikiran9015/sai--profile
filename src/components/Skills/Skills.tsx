import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Brain, Database, ShieldCheck, LineChart } from 'lucide-react';

const SkillCircle = ({ name, percentage, icon: Icon, delay }: any) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5, duration: 1.5, ease: "easeOut" }}
            className="text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-white mb-1" />
          <span className="text-xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-300 group-hover:text-primary transition-colors">{name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  const skillData = [
    { name: 'Python (Pandas, Numpy)', percentage: 95, icon: Brain, color: 'text-primary', delay: 0.1 },
    { name: 'SQL & Database Mgmt', percentage: 88, icon: Database, color: 'text-secondary', delay: 0.2 },
    { name: 'Machine Learning', percentage: 92, icon: Brain, color: 'text-accent', delay: 0.3 },
    { name: 'Data Visualization', percentage: 90, icon: LineChart, color: 'text-neon-green', delay: 0.4 },
    { name: 'Cybersecurity', percentage: 85, icon: ShieldCheck, color: 'text-blue-400', delay: 0.5 },
    { name: 'Power BI / Excel', percentage: 88, icon: LineChart, color: 'text-purple-400', delay: 0.6 },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Skills & Competencies" 
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {skillData.map((skill, index) => (
            <SkillCircle key={index} {...skill} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 glass-card p-8 md:p-12 border border-white/5"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" /> Languages
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Python (Expert), C++, SQL, JavaScript (ES6+), Java, HTML/CSS
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" /> Frameworks
              </h4>
              <p className="text-slate-400 leading-relaxed">
                React, Next.js, TensorFlow, PyTorch, Scikit-learn, Flask, FastAPI
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full" /> Tools
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Git, Docker, AWS, Power BI, Tableau, MongoDB, PostgreSQL
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
