import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewcomerComponent } from './add-newcomer.component';

describe('AddNewcomerComponent', () => {
  let component: AddNewcomerComponent;
  let fixture: ComponentFixture<AddNewcomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewcomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewcomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
