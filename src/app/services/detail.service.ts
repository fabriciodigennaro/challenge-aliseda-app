import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import {
  AddressApiResponse,
  ImageApiResponse,
  PropertyDetailApiResponse,
} from '../interfaces/property-detail-api-response';
import { Address, PropertyDetail } from '../interfaces/property-detail';
import { Image } from '../interfaces/properties-search-result';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailService {
  constructor(private _httpService: HttpService) {}

  getDetail(
    province: string,
    city: string,
    ref: string
  ): Observable<PropertyDetail> {
    const url = `get-property/10/${province}/${city}/${ref}`;
    return this._httpService
      .get(url)
      .pipe(map((response) => this.mapResponse(response)));
  }

  private mapResponse(response: PropertyDetailApiResponse): PropertyDetail {
    return {
      id: response.id,
      constructedArea: response.ConstructedArea,
      energyRating: response.EnergyRating,
      imageQuantity: response.NumImagen,
      description: response.Description,
      title: response.Metadescription,
      province: response.Capital,
      city: response.Ciudad,
      price: response.operacion.Precio,
      previousPrice: response.operacion.PrecioAnterior,
      discount: response.operacion.DescuentoPrecio,
      isPriceReduced: response.operacion.Rebajado === 1,
      bathrooms: response.vivienda.Bathrooms,
      bedrooms: response.vivienda.Bedrooms,
      address: this.maptoAddress(response.address),
      images: response.imagenes.map((apiImage) => this.mapToImage(apiImage)),
    };
  }

  private maptoAddress(address: AddressApiResponse): Address {
    return {
      latitude: address.Latitude,
      longitude: address.Longitude,
      googleStaticMapUrl: address.gStaticMapImage,
    };
  }

  private mapToImage(images: ImageApiResponse): Image {
    return {
      pkImagen: images.PkImagen,
      fkPropiedad: images.FkPropiedad,
      order: images.orden,
      uri: images.Uri,
    };
  }
}
