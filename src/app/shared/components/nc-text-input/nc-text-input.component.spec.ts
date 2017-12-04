import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcTextInputComponent } from './nc-text-input.component';

describe('NcTextInputComponent', () => {
  let component: NcTextInputComponent;
  let fixture: ComponentFixture<NcTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
