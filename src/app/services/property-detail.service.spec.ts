import { TestBed } from '@angular/core/testing';

import { PropertyDetailService } from './property-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PropertyDetailService', () => {
  let service: PropertyDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PropertyDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
