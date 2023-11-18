import {Image} from './properties-search-result';

export interface PropertyDetail {
  id: string;
  constructedArea: number;
  energyRating: string;
  imageQuantity: number;
  description: string;
  title: string;
  province: string;
  city: string;
  price: number;
  previousPrice: number;
  discount: number;
  isPriceReduced: boolean;
  bathrooms: number;
  bedrooms: number;
  address: Address;
  images: Image[];
}

export interface Address {
  latitude: number;
  longitude: number;
  googleStaticMapUrl: string;
}