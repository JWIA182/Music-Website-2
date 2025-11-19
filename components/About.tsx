import React from 'react';
import Section from './Section';
import { Mic2, Sliders, Headphones, Waves } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Photo Column */}
        <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100">
                <img 
                    src="https://picsum.photos/600/800?random=50" 
                    alt="Jakub Wiaderek" 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                Est. <br/> 2018
            </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-7 space-y-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">More than just a knob twister.</h2>
                <p className="text-zinc-600 leading-relaxed mb-6">
                    I’m Jakub, a mixing engineer and musician based in Poland. My journey didn't start behind a desk—it started in sweaty rehearsal rooms and crammed tour vans playing in punk and indie bands. 
                </p>
                <p className="text-zinc-600 leading-relaxed mb-6">
                    I know what it feels like to pour your heart into a song, only to have the recording sound thin and lifeless. That frustration is what drove me to master the art of mixing. I don't just "clean up" audio; I work to amplify the emotion and energy that makes your music yours.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                    My philosophy is simple: <strong>Serve the song.</strong> No ego, no preset-spamming. Just clear communication and a relentless drive to make your tracks sound huge.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
                <div>
                    <h3 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-accent" />
                        Tools I Use
                    </h3>
                    <ul className="text-sm text-zinc-600 space-y-2">
                        <li>Steinberg Cubase Pro</li>
                        <li>FabFilter & Slate Digital Bundle</li>
                        <li>Melodyne Studio</li>
                        <li>Universal Audio Plugins</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                        <Headphones className="w-5 h-5 text-accent" />
                        My Expertise
                    </h3>
                    <ul className="text-sm text-zinc-600 space-y-2">
                        <li>Modern Rock & Punk</li>
                        <li>Indie Pop</li>
                        <li>Heavy Alternative</li>
                        <li>Live Drums Processing</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
