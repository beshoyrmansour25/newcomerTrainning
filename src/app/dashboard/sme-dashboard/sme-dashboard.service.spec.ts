import { TestBed, inject } from '@angular/core/testing';

import { SmeDashboardService } from './sme-dashboard.service';

describe('SmeDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmeDashboardService]
    });
  });

  it('should be created', inject([SmeDashboardService], (service: SmeDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
