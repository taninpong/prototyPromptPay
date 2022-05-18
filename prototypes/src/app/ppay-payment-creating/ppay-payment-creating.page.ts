import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-ppay-payment-creating',
  templateUrl: './ppay-payment-creating.page.html',
  styleUrls: ['./ppay-payment-creating.page.scss'],
})
export class PpayPaymentCreatingPage implements OnInit {
  @ViewChild('countryList') countrySelectRef: IonSelect;
  public fg: FormGroup;
  data: any;
  public isFirstTime: boolean = true;
  hideList = true;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log("xxx", this.data);
          this.fg.patchValue(this.data);
          console.log(this.fg.value);
          if (this.fg.get('Number').value == 1 || this.fg.get('Number').value == 2 || this.fg.get('Number').value == 3 || this.fg.get('Number').value == 4) {
            this.fg.get("Accountnumber").setValue('0874561545');
          }
        }
      });
    }
    this.fg = this.fb.group({
      'Accountnumber': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'Number': null,
      'Type': null,
      'Price': 0,
      'M3': null,
      'M4': null,
      'Coupon': null,
      'Remark': null,
      'FirstnameTH': "อานน",
      'LastnameTH': "บางสาน",
      'FirstnameEN': "Anon",
      'LastnameEN': "Bangsan",
      'Bagname': "AnonBag",
      'Bankname': null,
    });
  }

  ngOnInit() {
  }

  selectcoupon() {
    this.countrySelectRef.open();
  }

  onSave() {
    console.log(this.fg.value);


    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      this.router.navigate(['/ppay-payment-confirm'], param);
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
