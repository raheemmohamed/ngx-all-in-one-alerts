import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msgConfig } from '../models/model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  alertFormGroup: FormGroup;
  showMessage = false;
  alertConfiguration: msgConfig;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.showBlockAlert();
  }

  initializeForm() {
    this.alertFormGroup = this.fb.group({
      title: ['Welcome', [Validators.required]],
      description: ['Description here'],
      closeOption: ['true', [Validators.required]],
      alertStatus: ['default', [Validators.required]],
      enableIcons: ['false', [Validators.required]],
    });

    this.alertFormGroup.valueChanges.subscribe((res) => {
      this.showBlockAlert();
    });
  }
  submitAlert(values) {
    this.showBlockAlert();
    console.log('success', values);
  }

  showBlockAlert() {
    this.alertConfiguration = {
      title: this.alertFormGroup.get('title').value,
      description: this.alertFormGroup.get('description').value,
      closeOption: this.alertFormGroup.get('closeOption').value == 'true',
      alertType: this.alertFormGroup.get('alertStatus').value,
      statusIcon: this.alertFormGroup.get('enableIcons').value == 'true',
    };

    this.showMessage = true;
  }
  modalChangeStatus(changeStatus) {
    this.showMessage = changeStatus;
  }
}
