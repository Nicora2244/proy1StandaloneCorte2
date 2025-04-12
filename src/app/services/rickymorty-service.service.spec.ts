import { TestBed } from '@angular/core/testing';

import { RickymortyServiceService } from './rickymorty-service.service';

describe('RickymortyServiceService', () => {
  let service: RickymortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickymortyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
