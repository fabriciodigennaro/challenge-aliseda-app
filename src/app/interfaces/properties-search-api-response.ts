export interface PropertiesSearchApiResponse {
    current_page: number;
    data: Data[];
    last_page: number;
    links: Link[];
    per_page: number;
    total: number;
}

export interface Data {
    is_promo: string;
    id: string;
    SuperficieTotal: number;
    ConstructedArea: number;
    Bathrooms: number;
    Bedrooms: number;
    Precio: string;
    PrecioAnterior: string;
    Rebajado: number;
    StreetName: string;
    Ciudad: string;
    nombreProvincia: string;
    provinciaUrl: string;
    ciudadUrl: string;
    Latitude: number;
    Longitude: number;
    DescuentoPrecio: number;
    Description: string;
    Metadescription: string;
    imagenes: ImageResponse[];
  }
  
 export interface ImageResponse {
    PkImagen: number;
    FkPropiedad: string;
    Orden: string;
    Uri: string;
  }
  

export interface Link {
    url: string | null;
    label: string;
    active: boolean;
}
