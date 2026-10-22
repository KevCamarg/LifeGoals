import { TestBed } from '@angular/core/testing';

import { MetaServicesService } from './meta-services.service';

describe('MetaServicesService', () => {
  let service: MetaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
