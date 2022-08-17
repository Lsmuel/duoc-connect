import { TestBed } from '@angular/core/testing';

import { CitaserviceService } from './citaservice.service';

describe('CitaserviceService', () => {
  let service: CitaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
