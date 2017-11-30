import { TestBed, inject } from '@angular/core/testing';

import { NewcomerDashboardService } from './newcomer-dashboard.service';

describe('NewcomerDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewcomerDashboardService]
    });
  });

  it('should be created', inject([NewcomerDashboardService], (service: NewcomerDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
