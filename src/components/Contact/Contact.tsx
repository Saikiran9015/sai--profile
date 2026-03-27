import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Code, Share2, Globe } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message sent successfully! (Simulation)');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's Build Something Amazing" 
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-white font-medium">abbusaikiran1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Call Me</p>
                  <p className="text-white font-medium">+91 6301576935</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors border border-neon-green/20">
                  <MapPin className="text-neon-green w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">Warangal, India</p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h4 className="text-white font-bold mb-6">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Code, link: '#', color: 'hover:text-[#333]' },
                  { icon: Share2, link: '#', color: 'hover:text-[#0077b5]' },
                  { icon: Globe, link: '#', color: 'hover:text-primary' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 transition-all ${social.color} border border-white/5 hover:border-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Your Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Let's talk about your next big idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-inner resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/80 transition-all group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
