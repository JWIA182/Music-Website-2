import React, { useState } from 'react';
import Section from './Section';
import { Mail, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
        setStatus('success');
        alert("Thanks for reaching out! I'll get back to you shortly.");
    }, 1000);
  };

  return (
    <Section id="contact" background="white">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's work together.</h2>
            <p className="text-zinc-600 mb-8 text-lg">
                Ready to take your tracks to the next level? Fill out the form or shoot me an email directly. I usually respond within 24 hours.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                        <p className="text-sm text-zinc-500 font-medium">Email me directly</p>
                        <a href="mailto:hello@jakubwiaderek.com" className="text-lg font-bold text-zinc-900 hover:text-accent transition-colors">
                            hello@jakubwiaderek.com
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-100">
                    <p className="text-sm font-medium text-zinc-500 mb-4">Follow me</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase">Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase">Email</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" placeholder="you@example.com" />
                </div>
            </div>
            
            <div className="space-y-1">
                <label htmlFor="project" className="text-xs font-bold text-zinc-500 uppercase">Project Type</label>
                <select id="project" className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all">
                    <option>Single Song Mixing</option>
                    <option>EP / Album Mixing</option>
                    <option>Vocal Tuning Only</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-zinc-500 uppercase">Message</label>
                <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" placeholder="Tell me about your project, genre, and goals..."></textarea>
            </div>

            <div className="pt-2">
                <button 
                    type="submit" 
                    disabled={status !== 'idle'}
                    className="w-full py-4 bg-zinc-900 text-white font-bold rounded-lg hover:bg-zinc-800 transition-all active:scale-[0.99] disabled:opacity-70"
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            <p className="text-xs text-center text-zinc-400 pt-2">
                I accept .wav and .aiff files. We can discuss file transfer after you contact me.
            </p>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
