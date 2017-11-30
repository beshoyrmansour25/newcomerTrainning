import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerTaskDetailsComponent } from './newcomer-task-details.component';

describe('NewcomerTaskDetailsComponent', () => {
  let component: NewcomerTaskDetailsComponent;
  let fixture: ComponentFixture<NewcomerTaskDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerTaskDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
