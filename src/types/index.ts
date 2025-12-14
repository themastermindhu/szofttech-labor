export interface Resource {
  id: string;
  title: string;
  type: 'book' | 'whitepaper' | 'tool';
  description: string;
  imageUrl?: string;
  downloadUrl?: string;
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  duration: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl?: string;
}
