export type ComplexStatus = "сдан" | "строится" | "старт продаж";

export type ApartmentStatus = "свободна" | "бронь" | "продана";

export interface ResidentialComplex {
  slug: string;
  name: string;
  status: ComplexStatus;
  address: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: string[];
  features: string[];
  priceFrom: number;
  completionDate: string;
  floors: number;
  apartmentsCount: number;
  coordinates: [number, number];
}

export interface Apartment {
  id: string;
  complexSlug: string;
  number: string;
  rooms: number;
  area: number;
  floor: number;
  totalFloors: number;
  price: number;
  pricePerM2: number;
  status: ApartmentStatus;
  planImage: string;
  windowsSide: string;
  balcony: boolean;
}

export interface CommercialUnit {
  id: string;
  complexSlug: string;
  number: string;
  area: number;
  floor: number;
  price: number;
  purpose: string;
  status: ApartmentStatus;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: "новость" | "статья";
  content: string;
}
