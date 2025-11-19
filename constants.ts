import { ServiceItem, PortfolioItem, TestimonialItem, FreebieItem } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Freebies', href: '#freebies' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Full Mix",
    price: "€150",
    description: "Complete mixing service to take your tracks from raw recordings to radio-ready bangers.",
    features: ["Volume balancing & panning", "EQ, Compression, Saturation", "Creative effects (Delay/Reverb)", "3 Free Revisions"]
  },
  {
    title: "Vocal Tuning",
    price: "€30",
    description: "Natural sounding pitch correction using Melodyne. No robotic artifacts unless you want them.",
    features: ["Manual note adjustment", "Timing alignment", "Natural feel preserved"]
  },
  {
    title: "Mastering Add-on",
    price: "€40",
    description: "The final polish. Loudness, clarity, and translation across all playback systems.",
    features: ["Loudness maximization", "Stereo widening", "Final EQ polish"]
  },
  {
    title: "Re-Amping",
    price: "€25 / track",
    description: "Running your DI signals through high-end real amps and cabs.",
    features: ["Real tube amps", "High-quality mics", "Custom tone crafting"]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    artist: "The Midnight Echo",
    track: "Neon Streets",
    genre: "Indie Rock",
    role: "Mixing & Mastering",
    description: "Aiming for a punchy, wide sound with gritty guitars and upfront vocals.",
    coverImage: "https://picsum.photos/400/400?random=1"
  },
  {
    id: 2,
    artist: "Broken Static",
    track: "Silence",
    genre: "Pop Punk",
    role: "Mixing",
    description: "Fast-paced energy. Focus on drum clarity and aggressive bass tones.",
    coverImage: "https://picsum.photos/400/400?random=2"
  },
  {
    id: 3,
    artist: "Sarah J.",
    track: "Acoustic Sessions",
    genre: "Alternative Folk",
    role: "Mixing",
    description: "Intimate and warm. Keeping the natural room sound alive while cleaning up mud.",
    coverImage: "https://picsum.photos/400/400?random=3"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote: "Jakub completely transformed our demo. He understood exactly the vibe we were going for without us even having to explain it deeply.",
    author: "Mike T.",
    project: "Drummer, 'Red Sky'"
  },
  {
    id: 2,
    quote: "Fast, professional, and easy to talk to. The mix came back sounding huge. Definitely working with him again.",
    author: "Elena R.",
    project: "Solo Artist"
  },
  {
    id: 3,
    quote: "Finally, someone who knows how to mix aggressive guitars without burying the vocals. A true pro.",
    author: "Davide L.",
    project: "Guitarist, 'Void'"
  }
];

export const FREEBIES: FreebieItem[] = [
  {
    title: "Mixing Checklist",
    description: "Don't miss a step. My personal PDF guide to finishing mixes.",
    downloadUrl: "#",
    iconType: "pdf"
  },
  {
    title: "Vocal Recording Tips",
    description: "Get it right at the source. How to capture pro vocals at home.",
    downloadUrl: "#",
    iconType: "audio"
  },
  {
    title: "Session Template",
    description: "My start-to-finish Cubase template for keeping sessions organized.",
    downloadUrl: "#",
    iconType: "template"
  }
];
