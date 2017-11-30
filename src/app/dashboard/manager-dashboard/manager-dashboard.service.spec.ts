import { TestBed, inject } from '@angular/core/testing';

import { ManagerDashboardService } from './manager-dashboard.service';

describe('ManagerDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerDashboardService]
    });
  });

  it('should be created', inject([ManagerDashboardService], (service: ManagerDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
