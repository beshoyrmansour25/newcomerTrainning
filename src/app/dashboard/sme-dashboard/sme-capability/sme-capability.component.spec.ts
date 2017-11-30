import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeCapabilityComponent } from './sme-capability.component';

describe('SmeCapabilityComponent', () => {
  let component: SmeCapabilityComponent;
  let fixture: ComponentFixture<SmeCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmeCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmeCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
