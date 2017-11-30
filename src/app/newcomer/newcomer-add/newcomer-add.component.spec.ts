import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerAddComponent } from './newcomer-add.component';

describe('NewcomerAddComponent', () => {
  let component: NewcomerAddComponent;
  let fixture: ComponentFixture<NewcomerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
