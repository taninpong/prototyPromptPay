import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-binding',
  templateUrl: './form-binding.page.html',
  styleUrls: ['./form-binding.page.scss'],
})
export class FormBindingPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'streetAddress': [null, Validators.required],
      'district': [null, Validators.required],
      'city': [null, Validators.required],
      'province': [null, Validators.required],
      'postalCode': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'fullAddress': null,
      'remark': null,
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      console.log(this.fg.value);
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
