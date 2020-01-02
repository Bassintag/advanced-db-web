import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInFormComponent } from './logged-in-form.component';

describe('LoggedInFormComponent', () => {
  let component: LoggedInFormComponent;
  let fixture: ComponentFixture<LoggedInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
