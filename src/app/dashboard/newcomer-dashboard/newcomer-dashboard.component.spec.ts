import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerDashboardComponent } from './newcomer-dashboard.component';

describe('NewcomerDashboardComponent', () => {
  let component: NewcomerDashboardComponent;
  let fixture: ComponentFixture<NewcomerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
