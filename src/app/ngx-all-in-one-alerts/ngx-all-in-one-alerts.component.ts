import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { msgConfig } from '../models/model';
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faInfo,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ngx-all-in-one-alerts',
  templateUrl: './ngx-all-in-one-alerts.component.html',
  styleUrls: ['./ngx-all-in-one-alerts.component.scss'],
})
export class NgxAllInOneAlertsComponent implements OnInit {
  faExclamationTriangle = faExclamationTriangle;
  faCheckCircle = faCheckCircle;
  faInfoCircle = faInfoCircle;
  faInfo = faInfo;
  faTimesCircle = faTimesCircle;

  @Input() showModal = false;
  @Input() msgConfig: msgConfig;

  @Output() modalChangeStatus = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.showModal = false;
    this.modalChangeStatus.emit(this.showModal);
  }
}
