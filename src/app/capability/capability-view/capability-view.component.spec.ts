import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityViewComponent } from './capability-view.component';

describe('CapabilityViewComponent', () => {
  let component: CapabilityViewComponent;
  let fixture: ComponentFixture<CapabilityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
