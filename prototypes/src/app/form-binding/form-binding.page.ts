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
      let msg = `Form data\n\nชื่อหัวข้อ: ${this.fg.get("title").value}\nที่อยู่: ${this.fg.get("streetAddress").value} ${this.fg.get("district").value} ${this.fg.get("city").value} ${this.fg.get("province").value} ${this.fg.get("postalCode").value}\nเบอร์ติดต่อ: ${this.fg.get("phoneNumber").value}\nหมายเหตุ: ${this.fg.get("remark").value}`
      alert(msg);
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
