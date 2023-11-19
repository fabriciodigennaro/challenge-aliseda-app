import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpService } from './http.service';
import { PropertiesSearchService } from './properties-search.service';
import { PropertiesSearchApiResponse, Data, ImageResponse } from '../interfaces/properties-search-api-response';
import { Property, PropertiesSearchResult, Image } from '../interfaces/properties-search-result';

describe('PropertyService', () => {
  let propertyService: PropertiesSearchService;
  let httpServiceSpy: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', ['get']);
    
    TestBed.configureTestingModule({
      providers: [
        PropertiesSearchService,
        { provide: HttpService, useValue: spy },
      ],
    });

    propertyService = TestBed.inject(PropertiesSearchService);
    httpServiceSpy = TestBed.inject(HttpService) as jasmine.SpyObj<HttpService>;
  });

  it('should be created', () => {
    expect(propertyService).toBeTruthy();
  });

  // TODO mock responses here
  // describe('getProperties', () => {
  //   it('should call the http service with the correct URL', () => {
  //     const page = 1;
  //     const mockApiResponse: PropertiesSearchApiResponse = /* Mock your API response here */;
  //     httpServiceSpy.get.and.returnValue(of(mockApiResponse));

  //     propertyService.getProperties(page).subscribe();

  //     expect(httpServiceSpy.get).toHaveBeenCalledWith(`new-search?tipo=10&page=${page}`);
  //   });

  //   it('should map the API response to PropertiesSearchResult', () => {
  //     const page = 1;
  //     const mockApiResponse: PropertiesSearchApiResponse = /* Mock your API response here */;
  //     const expectedPropertiesSearchResult: PropertiesSearchResult = /* Mock your expected result here */;
  //     httpServiceSpy.get.and.returnValue(of(mockApiResponse));

  //     propertyService.getProperties(page).subscribe((result) => {
  //       expect(result).toEqual(expectedPropertiesSearchResult);
  //     });
  //   });
  // });

});
