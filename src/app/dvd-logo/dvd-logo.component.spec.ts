import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdLogoComponent } from './dvd-logo.component';

describe('DvdLogoComponent', () => {
  let component: DvdLogoComponent;
  let fixture: ComponentFixture<DvdLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
