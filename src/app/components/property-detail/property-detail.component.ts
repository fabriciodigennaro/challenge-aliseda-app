import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PropertyDetail } from 'src/app/interfaces/property-detail';
import { PropertyDetailService } from 'src/app/services/property-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit, OnDestroy {
  buttonText: string = 'Volver';
  isFetching: boolean = true;
  showImagesCarousel: boolean = false;
  detail!: PropertyDetail;
  province: string = '';
  city: string = '';
  reference: string = '';
  imagesUrls: string[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private _propertyDetailService: PropertyDetailService,
    private _activatedroute: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getUrlParams();
    this.getPropertyDetail(this.province, this.city, this.reference);
    this.getBedrooms();
    this.getBathrooms();
  }

  private getPropertyDetail(
    province: string,
    city: string,
    reference: string
  ): void {
    const propertyDetailsubscription = this._propertyDetailService
      .getDetail(province, city, reference)
      .subscribe({
        next: (response) => {
          this.detail = response;
          this.getImages();
          this.isFetching = false;
        },
        error: (error) => {
          console.error('Error fetching properties:', error);
          this.isFetching = false;
        },
      });
    this.subscriptions.push(propertyDetailsubscription);
  }

  private getUrlParams(): void {
    this._activatedroute.params.subscribe((params) => {
      (this.province = params['province']),
        (this.city = params['city']),
        (this.reference = params['ref']);
    });
  }

  getBedrooms(): string {
    const bedroomQuantity = this.detail?.bedrooms;
    const bedroomText = `${bedroomQuantity} Habitaciones`;
    return bedroomQuantity === 1
      ? `${bedroomQuantity} Habitación`
      : bedroomText;
  }

  getBathrooms(): string {
    const bathroomQuantity = this.detail?.bathrooms;
    const bathroomText = `${bathroomQuantity} Baños`;
    return bathroomQuantity === 1 ? `${bathroomQuantity} Baño` : bathroomText;
  }

  goToPropertiesResultPage(): void {
    this._location.back();
  }

  getImages(): void {
    this.detail?.images.forEach((image) => {
      const uri = image.uri;
      if (uri.toLowerCase().endsWith('.jpg')) {
        this.imagesUrls.push(uri);
      }
    });
  }

  toggleCarousel(): void {
    this.showImagesCarousel = !this.showImagesCarousel;
  }

  getImageUri(): string {
    const imageUri = this.detail.images[0]?.uri;
    return imageUri ?? '../../../assets/default-property-image.jpg'
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
