import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/interfaces/property-api-response';
import { Property } from 'src/app/interfaces/property-search-result';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  buttonText: string = 'Ver 12 inmuebles más';
  properties: Property[] = [];
  nextPage: number = 2;

  private subscriptions: Subscription[] = [];

  constructor(private _propertyService: PropertyService) {
    this.properties = [];
  }

  ngOnInit(): void {
    this.getProperties();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getProperties(page: number = 1): void {
    const propertySubscription = this._propertyService
      .getProperties(page)
      .subscribe({
        next: (response) => {
          this.properties = [...this.properties, ...response.properties];
        },
        error: (error) => {
          console.error('Error fetching properties:', error);
        },
      });
    this.subscriptions.push(propertySubscription);
  }

  loadMoreResults(): void {
    this.getProperties(this.nextPage);
    ++this.nextPage;
  }
}
