const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Abbu Saikiran</span>. All rights reserved.
        </p>
        <p className="text-primary/70 text-sm font-medium tracking-wide flex items-center gap-1">
          Built with <span className="animate-pulse">❤️</span> & AI Passion
        </p>
        <p className="text-slate-500 text-sm hidden md:block">
          AI Developer | Cybersecurity Engineer | Full Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
