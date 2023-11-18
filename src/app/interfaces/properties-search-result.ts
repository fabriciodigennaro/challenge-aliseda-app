export interface PropertiesSearchResult {
    currentPage: number;
    properties: Property[];
    lastPage: number;
    links: Link[];
    perPage: number;
    total: number;
}

export interface Property {
    isPromo: string;
    id: string;
    totalSurface: number;
    constructedArea: number;
    bathrooms: number;
    bedrooms: number;
    price: number;
    previousPrice: number;
    isPriceReduced: boolean;
    streetName: string;
    city: string;
    cityUrl: string;
    provinceName: string;
    provinceUrl: string;
    latitude: number;
    longitude: number;
    discount: number;
    description: string;
    metaDescription: string;
    images: Image[];
  }
  
 export interface Image {
    pkImagen: number;
    fkPropiedad: string;
    order: string;
    uri: string;
  }
  

export interface Link {
    url: string | null;
    label: string;
    active: boolean;
}
