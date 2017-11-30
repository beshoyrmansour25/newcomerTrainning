import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeAssignComponent } from './sme-assign.component';

describe('SmeAssignComponent', () => {
  let component: SmeAssignComponent;
  let fixture: ComponentFixture<SmeAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmeAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmeAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
