import { Component, OnInit } from '@angular/core';

import { PropertyDetail } from 'src/app/interfaces/property-detail';
import { PropertyDetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  buttonText: string = 'Volver';
  isFetching: boolean = true;
  detail!: PropertyDetail;

  constructor(private _propertyDetailService: PropertyDetailService) {}

  ngOnInit(): void {
    // TODO get params from url
    this._propertyDetailService.getDetail('barcelona', 'rubi', 'ANT00047722164' ).subscribe({
      next: (response) => {
        this.detail = response;
        this.isFetching = false;
      },
      error: (error) => {
        console.error('Error fetching properties:', error);
          this.isFetching = false;
      }
  })
  }
}
