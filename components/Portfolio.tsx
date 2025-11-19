import React, { useState, useRef } from 'react';
import Section from './Section';
import { PORTFOLIO } from '../constants';
import { Play, Pause, Disc } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  
  // In a real app, we would have multiple refs or a context for audio. 
  // Here we simulate playing state visually.

  const togglePlay = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <Section id="work" background="light">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Hear the Difference</h2>
        <p className="text-zinc-600">
          Real projects, real results. Listen to a selection of tracks I've mixed recently. 
          Use headphones for the best experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-zinc-100 group">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-zinc-200">
              <img 
                src={item.coverImage} 
                alt={item.track} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Play Button */}
              <button 
                onClick={() => togglePlay(item.id)}
                className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center"
              >
                <div className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg transition-transform duration-300 ${playingId === item.id ? 'scale-100' : 'scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100'}`}>
                  {playingId === item.id ? (
                    <Pause className="w-6 h-6 text-zinc-900 fill-zinc-900" />
                  ) : (
                    <Play className="w-6 h-6 text-zinc-900 fill-zinc-900 ml-1" />
                  )}
                </div>
              </button>

              {/* Playing Animation */}
              {playingId === item.id && (
                 <div className="absolute bottom-4 right-4 flex gap-1 items-end h-6">
                   <div className="w-1 bg-white animate-[bounce_1s_infinite] h-3"></div>
                   <div className="w-1 bg-white animate-[bounce_1.2s_infinite] h-5"></div>
                   <div className="w-1 bg-white animate-[bounce_0.8s_infinite] h-4"></div>
                 </div>
              )}
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg text-zinc-900">{item.track}</h3>
                        <p className="text-zinc-500 text-sm font-medium">{item.artist}</p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-zinc-100 text-zinc-600 rounded uppercase tracking-wide">
                        {item.genre}
                    </span>
                </div>
                <p className="text-sm text-zinc-600 line-clamp-2 pt-2">
                    {item.description}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs text-accent font-medium">
                    <Disc className="w-4 h-4" />
                    {item.role}
                </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
              * These clips are for demonstration. All rights belong to the original artists.
          </p>
      </div>
    </Section>
  );
};

export default Portfolio;
