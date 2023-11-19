import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { HttpService } from './http.service';
import {
  Data,
  ImageResponse,
  PropertiesSearchApiResponse,
} from '../interfaces/properties-search-api-response';
import {
  Property,
  PropertiesSearchResult,
  Image,
} from '../interfaces/properties-search-result';

@Injectable({
  providedIn: 'root',
})
export class PropertiesSearchService {
  constructor(private _httpService: HttpService) {}

  getProperties(page: number = 1): Observable<PropertiesSearchResult> {
    return this._httpService
      .get(`new-search?tipo=10&page=${page}`)
      .pipe(map((response) => this.mapResponse(response)));
  }

  private mapResponse(response: PropertiesSearchApiResponse): PropertiesSearchResult {
    return {
      currentPage: response.current_page,
      properties: response.data.map((data) => this.mapDataToProperty(data)),
      lastPage: response.last_page,
      links: response.links,
      perPage: response.per_page,
      total: response.total,
    };
  }

  private mapDataToProperty(data: Data): Property {
    return {
      isPromo: data.is_promo,
      id: data.id,
      totalSurface: data.SuperficieTotal,
      constructedArea: data.ConstructedArea,
      bathrooms: data.Bathrooms,
      bedrooms: data.Bedrooms,
      price: +data.Precio,
      previousPrice: +data.PrecioAnterior,
      isPriceReduced: data.Rebajado == 1,
      streetName: data.StreetName,
      city: data.Ciudad,
      cityUrl: data.ciudadUrl,
      provinceName: data.nombreProvincia,
      provinceUrl: data.provinciaUrl,
      latitude: data.Latitude,
      longitude: data.Longitude,
      discount: data.DescuentoPrecio,
      description: data.Description,
      title: data.Metadescription,
      images: data.imagenes.map((images) => this.mapImagenesToImages(images)),
    };
  }

  private mapImagenesToImages(images: ImageResponse): Image {
    return {
      pkImagen: images.PkImagen,
      fkPropiedad: images.FkPropiedad,
      order: images.Orden,
      uri: images.Uri || '',
    };
  }
}
