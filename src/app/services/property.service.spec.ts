import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpService } from './http.service';
import { PropertyService } from './property.service';
import { RealStateApiResponse, Data, ImageResponse } from '../interfaces/property-api-response';
import { Property, PropertySearchResult, Image } from '../interfaces/property-search-result';

describe('PropertyService', () => {
  let propertyService: PropertyService;
  let httpServiceSpy: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', ['get']);
    
    TestBed.configureTestingModule({
      providers: [
        PropertyService,
        { provide: HttpService, useValue: spy },
      ],
    });

    propertyService = TestBed.inject(PropertyService);
    httpServiceSpy = TestBed.inject(HttpService) as jasmine.SpyObj<HttpService>;
  });

  it('should be created', () => {
    expect(propertyService).toBeTruthy();
  });

  // TODO mock responses here
  // describe('getProperties', () => {
  //   it('should call the http service with the correct URL', () => {
  //     const page = 1;
  //     const mockApiResponse: RealStateApiResponse = /* Mock your API response here */;
  //     httpServiceSpy.get.and.returnValue(of(mockApiResponse));

  //     propertyService.getProperties(page).subscribe();

  //     expect(httpServiceSpy.get).toHaveBeenCalledWith(`new-search?tipo=10&page=${page}`);
  //   });

  //   it('should map the API response to PropertySearchResult', () => {
  //     const page = 1;
  //     const mockApiResponse: RealStateApiResponse = /* Mock your API response here */;
  //     const expectedPropertySearchResult: PropertySearchResult = /* Mock your expected result here */;
  //     httpServiceSpy.get.and.returnValue(of(mockApiResponse));

  //     propertyService.getProperties(page).subscribe((result) => {
  //       expect(result).toEqual(expectedPropertySearchResult);
  //     });
  //   });
  // });

});
