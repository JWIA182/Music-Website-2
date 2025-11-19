import React from 'react';
import Section from './Section';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" background="white">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Transparent Pricing. <br/> Professional Results.</h2>
            <p className="text-zinc-600 mb-8">
                I believe in clear, upfront pricing so you can budget your project effectively. 
                Whether it's a single demo or a full album cycle, I'm here to help.
            </p>
            <div className="bg-zinc-900 text-white p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Bundle Deals?</h3>
                <p className="text-zinc-300 text-sm mb-4">
                    Booking an EP (4+ songs) or an Album? I offer custom discounts for larger projects.
                </p>
                <a href="#contact" className="text-sm underline hover:text-accent transition-colors">Get a custom quote &rarr;</a>
            </div>
        </div>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
                <div key={index} className="border border-zinc-100 rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-xl text-zinc-900">{service.title}</h3>
                        <span className="font-display font-bold text-lg text-accent bg-indigo-50 px-3 py-1 rounded-full">
                            {service.price}
                        </span>
                    </div>
                    <p className="text-sm text-zinc-600 mb-6 h-10">
                        {service.description}
                    </p>
                    <ul className="space-y-3">
                        {service.features?.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
