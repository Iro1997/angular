import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAPIComponent } from './employee-api.component';

describe('EmployeeAPIComponent', () => {
  let component: EmployeeAPIComponent;
  let fixture: ComponentFixture<EmployeeAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
