import React from 'react';
import Section from './Section';
import { FREEBIES } from '../constants';
import { Download, FileText, Music, Layout } from 'lucide-react';

const Freebies: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
        case 'pdf': return <FileText className="w-6 h-6 text-accent" />;
        case 'template': return <Layout className="w-6 h-6 text-accent" />;
        case 'audio': return <Music className="w-6 h-6 text-accent" />;
        default: return <FileText />;
    }
  }

  return (
    <Section id="freebies" background="light">
      <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Free Tools for Artists</h2>
          <p className="text-zinc-600">
              Good mixes start with good recordings. I've put together these resources to help you prepare your tracks before you send them to me (or anyone else).
          </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {FREEBIES.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                    {getIcon(item.iconType)}
                </div>
                <h3 className="font-bold text-lg text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 mb-6 flex-grow">
                    {item.description}
                </p>
                <button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:border-accent hover:text-accent flex items-center justify-center gap-2 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                </button>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Freebies;
