import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsChartsComponent } from './appointments-charts.component';

describe('AppointmentsChartsComponent', () => {
  let component: AppointmentsChartsComponent;
  let fixture: ComponentFixture<AppointmentsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
