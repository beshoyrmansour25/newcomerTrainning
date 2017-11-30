import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerEditComponent } from './newcomer-edit.component';

describe('NewcomerEditComponent', () => {
  let component: NewcomerEditComponent;
  let fixture: ComponentFixture<NewcomerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
