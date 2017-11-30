import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilitySingleComponent } from './capability-single.component';

describe('CapabilitySingleComponent', () => {
  let component: CapabilitySingleComponent;
  let fixture: ComponentFixture<CapabilitySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilitySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilitySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
