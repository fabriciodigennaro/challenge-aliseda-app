export interface PropertyDetailApiResponse {
  id: string;
  ConstructedArea: number;
  EnergyRating: string;
  NumImagen: number;
  Description: string;
  Metadescription: string;
  Capital: string;
  Ciudad: string;
  operacion: OperationApiResponse;
  vivienda: CaracteristicsApiResponse;
  address: AddressApiResponse;
  imagenes: ImageApiResponse[];
}

export interface OperationApiResponse {
  Precio: number;
  PrecioAnterior: number;
  DescuentoPrecio: number;
  Rebajado: number;
}

export interface CaracteristicsApiResponse {
  Bathrooms: number;
  Bedrooms: number;
}

export interface AddressApiResponse {
  Latitude: number;
  Longitude: number;
  gStaticMapImage: string;
}

export interface ImageApiResponse {
  PkImagen: number;
  FkPropiedad: string;
  orden: string;
  Uri: string;
}
