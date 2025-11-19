import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-xs font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-zinc-900 leading-[1.1] tracking-tight">
            Mixing that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">hits harder.</span>
          </h1>
          
          <p className="text-lg text-zinc-600 max-w-md leading-relaxed">
            I help indie, punk, and alternative artists achieve a massive, radio-ready sound without losing their raw, authentic edge.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-accent transition-colors flex items-center gap-2 group"
            >
              Let's mix your track
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work" 
              className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:border-zinc-400 transition-colors"
            >
              Listen to samples
            </a>
          </div>
        </div>

        <div className="relative hidden md:block h-[600px] bg-zinc-100 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200">
           <img 
             src="https://picsum.photos/800/1200?random=99" 
             alt="Mixing Studio" 
             className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
           <div className="absolute bottom-8 left-8 text-white">
             <p className="font-medium text-sm opacity-80">Currently listening to</p>
             <p className="text-xl font-display font-bold">Rough Mix V3.wav</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
