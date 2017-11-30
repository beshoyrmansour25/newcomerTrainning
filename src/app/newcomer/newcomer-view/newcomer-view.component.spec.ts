import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerViewComponent } from './newcomer-view.component';

describe('NewcomerViewComponent', () => {
  let component: NewcomerViewComponent;
  let fixture: ComponentFixture<NewcomerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
