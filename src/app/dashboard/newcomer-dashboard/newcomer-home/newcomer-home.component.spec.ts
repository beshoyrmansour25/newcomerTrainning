import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerHomeComponent } from './newcomer-home.component';

describe('NewcomerHomeComponent', () => {
  let component: NewcomerHomeComponent;
  let fixture: ComponentFixture<NewcomerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
