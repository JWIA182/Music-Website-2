import React from 'react';
import { Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
            <Music2 className="w-6 h-6 text-accent" />
            <span className="text-white font-display font-bold text-lg">Jakub Wiaderek</span>
        </div>
        
        <div className="text-sm flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm">
            &copy; {new Date().getFullYear()} Jakub Wiaderek. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
