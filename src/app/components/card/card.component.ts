import { Component, Input } from '@angular/core';
import { Data } from 'src/app/interfaces/property-api-response';
import { Property } from 'src/app/interfaces/property-search-result';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() property!: Property;

  constructor() {};

  ngOnInit(): void {
    this.getImageUri();
    this.getBedrooms();
    this.getBathrooms();
  }

  getBedrooms(): string {
    const bedroomQuantity = this.property.bedrooms;
    const bedroomText = `${bedroomQuantity} Habitaciones`;
    return bedroomQuantity === 1 ? `${bedroomQuantity} Habitación` : bedroomText;
  }

  getBathrooms(): string {
    const bathroomQuantity = this.property.bathrooms;
    const bathroomText = `${bathroomQuantity} Baños`;
    return bathroomQuantity === 1 ? `${bathroomQuantity} Baño` : bathroomText;
  }

  getImageUri(): string {
    const imageUri = this.property.images[0]?.uri;
    return imageUri ?? '../../../assets/default-property-image.jpg'
  }
}
