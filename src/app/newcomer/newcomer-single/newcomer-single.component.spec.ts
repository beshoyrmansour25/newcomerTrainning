import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerSingleComponent } from './newcomer-single.component';

describe('NewcomerSingleComponent', () => {
  let component: NewcomerSingleComponent;
  let fixture: ComponentFixture<NewcomerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
