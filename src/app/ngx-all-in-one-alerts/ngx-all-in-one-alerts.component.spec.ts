import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAllInOneAlertsComponent } from './ngx-all-in-one-alerts.component';

describe('NgxAllInOneAlertsComponent', () => {
  let component: NgxAllInOneAlertsComponent;
  let fixture: ComponentFixture<NgxAllInOneAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAllInOneAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAllInOneAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
