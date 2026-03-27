import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HeroModel from './HeroModel';

const TypewriterText = () => {
  const titles = [
    'AI Developer',
    'Cybersecurity Engineer',
    'Data Scientist',
    'Full Stack Developer'
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = titles[index];
      const isDeletingState = isDeleting; // Map local 'isDeleting' to 'isDeletingState' for the provided logic

      if (!isDeletingState && displayText.length < currentWord.length) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      } else if (isDeletingState && displayText.length > 0) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else if (!isDeletingState && displayText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Use setIsDeleting
      } else if (isDeletingState && displayText.length === 0) {
        setIsDeleting(false); // Use setIsDeleting
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 50 : 150); // Use isDeleting for speed

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, titles]); // Add titles to dependencies

  return (
    <span className="text-primary font-mono inline-block">
      {displayText}
      <span className="animate-pulse bg-primary w-1 h-8 ml-1 inline-block" />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <HeroModel />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono tracking-widest text-sm md:text-base uppercase"
          >
            Welcome to my digital universe
          </motion.p>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-tight">
            Hi, I'm <span className="text-glow underline decor-primary/20 decoration-8 underline-offset-8">Abbu Saikiran</span>
          </h1>

            <h2 className="text-2xl md:text-3xl font-light text-slate-400 mt-4 h-12">
              <TypewriterText />
            </h2>

          <p className="max-w-xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            Crafting intelligent solutions at the intersection of machine learning, security, and world-class web experiences.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white font-bold rounded-full flex items-center gap-2 hover:bg-primary/80 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all hover:border-white/40"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-white transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
