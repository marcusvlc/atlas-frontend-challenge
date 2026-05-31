export interface Professional {
  id: number;
  name: string;
  profession: string;
  category: string;
  hourlyRate: number;
  rating: number;
  totalReviews: number;
  distance: number;
  photo: string;
  description: string;
  services: string[];
  availability: "available" | "busy" | "unavailable";
  location: string;
  experienceYears: number;
  gallery: string[];
  reviews: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}
