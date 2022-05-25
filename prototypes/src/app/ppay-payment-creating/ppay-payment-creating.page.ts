import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, IonSelect } from '@ionic/angular';

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
  checkusecoupon = false;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public alertController: AlertController) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log("xxx", this.data);
          this.fg.patchValue(this.data);
          if (this.fg.get('Number').value == 1 || this.fg.get('Number').value == 2 || this.fg.get('Number').value == 3 || this.fg.get('Number').value == 4) {
            this.fg.get("Accountnumber").setValue('0874561545');
          }
        }

        console.log(this.fg.value);

      });
    }
    this.fg = this.fb.group({
      'Accountnumber': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'Number': null,
      'Type': null,
      'Price': 0,
      'M3': null,
      'M4': null,
      'Coupon': this.fb.array([]),
      'Remark': null,
      'FirstnameTH': "อานน",
      'LastnameTH': "บางสาน",
      'FirstnameEN': "Anon",
      'LastnameEN': "Bangsan",
      'Bagname': "RuyBag",
      'Bankname': null,
      'BankLogo': null,
    });
  }

  ngOnInit() {
  }

  selectcoupon() {
    this.countrySelectRef.open();
  }

  async onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    if (this.fg.valid) {
      if (this.fg.get('Coupon').value.length == 0) {
        const alert = await this.alertController.create({
          header: 'แจ้งเตือน!',
          message: 'คุณจะใช้คูปองที่มีหรือไม่',
          buttons: [
            {
              text: 'ไม่ใช้',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                this.checkusecoupon = false;
                console.log(this.checkusecoupon);
                let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
                this.router.navigate(['/ppay-payment-confirm'], param);
              }
            }, {
              text: 'ใช้',
              handler: () => {
                this.checkusecoupon = true;
                console.log(this.checkusecoupon);
                this.usecoupon();
                let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
                this.router.navigate(['/ppay-payment-confirm'], param);
              }
            }
          ]
        });
        await alert.present();
      } else {
        let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
        this.router.navigate(['/ppay-payment-confirm'], param);
      }
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

  usecoupon() {
    var coupons = [{ 'id': 1, 'name': 'ส่วนลด 20 THB', 'value': 20, checkuse: true }, { 'id': 2, 'name': 'ส่วนลด 50 THB', 'value': 50, checkuse: true }, { 'id': 3, 'name': 'ส่งฟรี', 'value': 0, checkuse: false }];
    this.fg.setControl('Coupon', this.fb.array(coupons || []));
  }

  deletecoupon(id: number) {
    this.Coupon.removeAt(id);
  }

  get Coupon(): FormArray {
    return this.fg.get('Coupon') as FormArray;
  };
}
