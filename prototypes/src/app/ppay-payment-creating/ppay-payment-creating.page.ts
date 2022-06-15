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
  discount: number = 0;
  total: number = 0;
  checkacc: any;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public alertController: AlertController) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log("xxx", this.data);
          this.fg.patchValue(this.data);
          if (this.fg.get('Type').value == 'QRP' || this.fg.get('Type').value == 'QRB') {
            this.fg.get("Accountnumber").setValue('0874561545');
          }
          this.discount = 0;
          this.fg.setControl('Coupon', this.fb.array([]));
          this.fg.get('total').setValue(this.fg.get('Price').value - this.discount);
          if (this.fg.get('total').value < 0) {
            this.fg.get('total').setValue(0);
          }
          this.fg.get('Discount').setValue(this.discount);
          this.fg.get('Remark').setValue(null);
          if (this.fg.get('Type').value == 'BA') {
            this.fg.get('FirstnameTH').setValue("บีด้า");
            this.fg.get('LastnameTH').setValue("นะ");
          }
          if (this.fg.get('Type').value == 'PA') {
            this.fg.get('FirstnameTH').setValue("โอ้วแม่สาวน้อย");
            this.fg.get('LastnameTH').setValue("ไปกินติมไหม");
          }
        }
      
        console.log(this.fg.value);

      });
    }
    this.fg = this.fb.group({
      'Accountnumber': [null, [Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
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
      'total': 0,
      'Bankname': null,
      'BankLogo': null,
      'Fee': 0,
      'Discount': 0,
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
              }
            }
          ]
        });
        await alert.present();
      } else {
        let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      }
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

  usecoupon() {
    var coupons = [{ 'id': 1, 'name': 'x1 คูปองส่วนลด 20 บาท', 'value': 20, checkuse: true }, { 'id': 2, 'name': 'x1 คูปองส่วนลด 50 บาท', 'value': 50, checkuse: true }, { 'id': 3, 'name': 'x1 คูปองส่งฟรี', 'value': 0, checkuse: false }];
    this.fg.setControl('Coupon', this.fb.array(coupons || []));
    this.discount = 0;
    this.sumcouponprice();
  }

  deletecoupon(id: number) {
    console.log("id", id);
    var sum = 0;
    this.Coupon.removeAt(id);
    this.fg.get('Coupon').value.forEach(element => {
      if (element.checkuse == true) {
        sum += element.value;
      }
    });
    this.fg.get('Discount').setValue(sum);
    this.fg.get('total').setValue(this.fg.get('Price').value - this.fg.get('Discount').value);
  }

  get Coupon(): FormArray {
    return this.fg.get('Coupon') as FormArray;
  };

  sumcouponprice() {
    this.fg.get('Coupon').value.forEach(element => {
      if (element.checkuse == true) {
        this.discount += element.value;
      }
    });
    this.fg.get('Discount').setValue(this.discount);
    this.fg.get('total').setValue(this.fg.get('Price').value - this.fg.get('Discount').value);
    if (this.fg.get('total').value < 0) {
      this.fg.get('total').setValue(0);
    }
  }

  xxx(ev) {
    if (this.fg.get('Price').value > 0) {
      this.checkacc = "colors";
    } else {
      this.checkacc = "";
    }
    console.log(ev.detail);

  }

  openOptionDlg(){
    this.router.navigate(['/option-dialog-template']);
  }


}
