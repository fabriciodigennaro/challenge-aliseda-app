import { Component, OnDestroy, OnInit } from '@angular/core';
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
  detail!: PropertyDetail;
  province: string = '';
  city: string = '';
  reference: string = '';

  private subscriptions: Subscription[] = [];

  constructor(
    private _propertyDetailService: PropertyDetailService,
    private _activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUrlParams();
    this.getPropertyDetail(this.province, this.city, this.reference);
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
