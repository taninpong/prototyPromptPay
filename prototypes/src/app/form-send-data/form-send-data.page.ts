import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-form-send-data',
  templateUrl: './form-send-data.page.html',
  styleUrls: ['./form-send-data.page.scss'],
})
export class FormSendDataPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fg = this.fb.group({
      'title': [null, Validators.required],
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
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      this.router.navigate(['/form-receive-data'], param);
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
