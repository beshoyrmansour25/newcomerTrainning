import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcNavbarComponent } from './nc-navbar.component';

describe('NcNavbarComponent', () => {
  let component: NcNavbarComponent;
  let fixture: ComponentFixture<NcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
