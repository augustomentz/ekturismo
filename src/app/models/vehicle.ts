export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  image: string;
  images: string[];
  description: string;
  longDescription: string;
  capacity: number;
  features: string[];
  year: number | null;
}
