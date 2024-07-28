import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppNotificationComponent } from './whats-app-notification.component';

describe('WhatsAppNotificationComponent', () => {
  let component: WhatsAppNotificationComponent;
  let fixture: ComponentFixture<WhatsAppNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsAppNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
