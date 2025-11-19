export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features?: string[];
}

export interface PortfolioItem {
  id: number;
  artist: string;
  track: string;
  genre: string;
  role: string;
  description: string;
  coverImage: string;
  audioUrl?: string; // Optional for the demo
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  project: string;
}

export interface FreebieItem {
  title: string;
  description: string;
  downloadUrl: string;
  iconType: 'pdf' | 'template' | 'audio';
}
