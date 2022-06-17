import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  public fg: FormGroup;
  data: any;
  checkusecoupon = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          this.fg.patchValue(this.data);
          this.fg.setControl('Coupon', this.fb.array(this.data.Coupon || []));
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

  async onSave() {
    if (this.fg.get('Coupon').value.length == 0) {
      this.checkusecoupon = false;
      console.log(this.checkusecoupon);
      this.fg.get('Type').value == 'alipay' ? this.fg.get("Fee").setValue(5) : this.fg.get("Fee").setValue(0.04);
      console.log(this.fg.get('Fee').value);
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      this.router.navigate(['/ppay-payment-confirm'], param);
    }
    if (this.fg.get('Coupon').value.length > 0) {
      this.checkusecoupon = true;
      console.log(this.checkusecoupon);
      this.fg.get('Type').value == 'alipay' ? this.fg.get("Fee").setValue(5) : this.fg.get("Fee").setValue(0.04);
      console.log(this.fg.get('Fee').value);
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      this.router.navigate(['/ppay-payment-confirm'], param);
    }
  }
}
