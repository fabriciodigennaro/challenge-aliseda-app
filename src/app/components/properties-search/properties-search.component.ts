import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Property } from 'src/app/interfaces/properties-search-result';
import { PropertiesSearchService } from 'src/app/services/properties-search.service';

@Component({
  selector: 'app-properties-search',
  templateUrl: './properties-search.component.html',
  styleUrls: ['./properties-search.component.scss'],
})
export class PropertiesSearchComponent implements OnInit, OnDestroy {
  buttonText: string = 'Ver 12 inmuebles más';
  properties: Property[] = [];
  nextPage: number = 2;
  isFetching: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private _propertiesSearchService: PropertiesSearchService,
    private _router: Router
  ) {
    this.properties = [];
  }

  ngOnInit(): void {
    this.getProperties();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private getProperties(page: number = 1): void {
    this.isFetching = true;
    const propertySubscription = this._propertiesSearchService
      .getProperties(page)
      .subscribe({
        next: (response) => {
          this.properties = [...this.properties, ...response.properties];
          this.isFetching = false;
        },
        error: (error) => {
          console.error('Error fetching properties:', error);
          this.isFetching = false;
        },
      });
    this.subscriptions.push(propertySubscription);
  }

  loadMoreResults(): void {
    this.getProperties(this.nextPage);
    ++this.nextPage;
  }

  goToDetail(property: Property): void {
    this._router.navigate([
      `detalle/${property.provinceUrl}/${property.cityUrl}/${property.id}`,
    ]);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
