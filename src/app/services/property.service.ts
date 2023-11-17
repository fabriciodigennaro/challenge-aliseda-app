import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { HttpService } from './http.service';
import {
  Data,
  ImageResponse,
  RealStateApiResponse,
} from '../interfaces/property-api-response';
import {
  Property,
  PropertySearchResult,
  Image,
} from '../interfaces/property-search-result';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private _httpService: HttpService) {}

  getProperties(page: number = 1): Observable<PropertySearchResult> {
    return this._httpService
      .get(`new-search?tipo=10&page=${page}`)
      .pipe(map((response) => this.mapResponse(response)));
  }

  mapResponse(response: RealStateApiResponse): PropertySearchResult {
    return {
      currentPage: response.current_page,
      properties: response.data.map((data) => this.mapDataToProperty(data)),
      lastPage: response.last_page,
      links: response.links,
      perPage: response.per_page,
      total: response.total,
    };
  }

  mapDataToProperty(data: Data): Property {
    return {
      isPromo: data.is_promo,
      id: data.id,
      totalSurface: data.SuperficieTotal,
      constructedArea: data.ConstructedArea,
      bathrooms: data.Bathrooms,
      bedrooms: data.Bedrooms,
      price: data.Precio,
      previousPrice: data.PrecioAnterior,
      isPriceReduced: data.Rebajado == 1,
      streetName: data.StreetName,
      city: data.Ciudad,
      provinceName: data.nombreProvincia,
      latitude: data.Latitude,
      longitude: data.Longitude,
      discount: data.DescuentoPrecio,
      description: data.Description,
      metaDescription: data.Metadescription,
      images: data.imagenes.map((images) => this.mapImagenesToImages(images)),
    };
  }

  mapImagenesToImages(images: ImageResponse): Image {
    return {
      pkImagen: images.PkImagen,
      fkPropiedad: images.FkPropiedad,
      order: images.Orden,
      uri: images.Uri || '',
    };
  }
}
