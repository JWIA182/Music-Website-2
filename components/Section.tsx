import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ id, className = "", children, background = 'white' }) => {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-zinc-900 text-white',
  }[background];

  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
