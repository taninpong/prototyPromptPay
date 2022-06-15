import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-ppay-payment-confirm',
  templateUrl: './ppay-payment-confirm.page.html',
  styleUrls: ['./ppay-payment-confirm.page.scss'],
})
export class PpayPaymentConfirmPage implements OnInit {
  public fg: FormGroup;
  @ViewChild('countryList') countrySelectRef: IonSelect;

  data: any;
  discount: number = 0;
  fee: number = 0;
  hideList = true;
  checkCo: any;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log("xxx", this.data);
          console.log("data.Coupon", this.data.Coupon);
          this.checkCo = this.data.Coupon
          console.log("444", this.checkCo);
          
          this.fg.patchValue(this.data);
          console.log(this.fg.value);
          if (this.fg.get('Number').value == 1) {
            // this.fg.get("Remark").setValue('โอนเงินพร้อมเพย์ไปยัง' + this.fg.get("Accountnumber").value);
          }
          if (this.fg.get('Number').value == 2 || this.fg.get('Number').value == 3 || this.fg.get('Number').value == 4) {
            // this.fg.get("Remark").setValue('BillerId : 01055637789355 \n ref1 : 0036671388 \n ref2 : 000P8444111' );
          }
        }
        this.fg.setControl('Coupon', this.fb.array(this.data.Coupon || []));
        this.discountprice();
        this.fg.get('total').setValue(this.fg.get('Price').value + this.fee - this.discount);
        if (this.fg.get('total').value < 0) {
          this.fg.get('total').setValue(0);
        }
        this.fg.get('Discount').setValue(this.discount);

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
      'FirstnameTH': null,
      'LastnameTH': null,
      'FirstnameEN': null,
      'LastnameEN': null,
      'Bagname': null,
      'total': 0,
      'BankLogo': null,
      'Bankname': null,
      'Fee': 0,
      'Discount': 0,
    });
    
  }

  ngOnInit() {
  }

  // selectcoupon() {
  //   this.countrySelectRef.open();
  //   if (this.fg.get('Coupon').value == 'ส่วนลด 20 THB') {
  //     this.discount = 20;
  //   } else if (this.fg.get('Coupon').value == 'ส่วนลด 50 THB') {
  //     this.discount = 50;
  //   } else {
  //     this.discount = 0;
  //   }
  //   this.fg.get('total').setValue(this.fg.get('Price').value + this.fee - this.discount);
  // }

  onSave() {
    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      this.router.navigate(['/ppay-payment-success'], param);
    }
  }

  get Coupon(): FormArray {
    return this.fg.get('Coupon') as FormArray;
  };

  discountprice() {
    this.fg.get('Coupon').value.forEach(element => {
      if (element.checkuse == true) {
        this.discount += element.value;
      }
    });
  }

}
