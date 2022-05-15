import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-to',
  templateUrl: './transfer-to.page.html',
  styleUrls: ['./transfer-to.page.scss'],
})
export class TransferToPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fg = this.fb.group({
      'PPay': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    if (this.fg.valid) {
      console.log("1111");
      this.router.navigate(['/ppay-payment-creating'])
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
