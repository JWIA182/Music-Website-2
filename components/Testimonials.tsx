import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" background="dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Artist Love</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-700 opacity-50" />
                <p className="text-zinc-300 italic mb-6 relative z-10">
                    "{item.quote}"
                </p>
                <div>
                    <p className="font-bold text-white">{item.author}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{item.project}</p>
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
