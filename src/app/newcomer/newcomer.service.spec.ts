import { TestBed, inject } from '@angular/core/testing';

import { NewcomerService } from './newcomer.service';

describe('NewcomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewcomerService]
    });
  });

  it('should be created', inject([NewcomerService], (service: NewcomerService) => {
    expect(service).toBeTruthy();
  }));
});
