import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerListComponent } from './newcomer-list.component';

describe('NewcomerListComponent', () => {
  let component: NewcomerListComponent;
  let fixture: ComponentFixture<NewcomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
