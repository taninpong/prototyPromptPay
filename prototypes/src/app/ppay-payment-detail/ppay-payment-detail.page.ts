import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ppay-payment-detail',
  templateUrl: './ppay-payment-detail.page.html',
  styleUrls: ['./ppay-payment-detail.page.scss'],
})
export class PpayPaymentDetailPage implements OnInit {
  data: any;
  public fg: FormGroup;
  discount: number = 0;
  fee: number = 15;
  hideList = true;
  date = new Date;
  rand = 0;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log("xxx", this.data);
          this.fg.patchValue(this.data);
        }
      });
      this.rand = Math.floor(Math.random() * (9999 - 9000 + 1)) + 9000;
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
      'FirstnameTH': null,
      'LastnameTH': null,
      'FirstnameEN': null,
      'LastnameEN': null,
      'Bagname': null,
      'total': 0,
      'Bankname': null,
    });
  }

  ngOnInit() {
  }

  gohome() {
    this.router.navigate(['/'], { replaceUrl: true });

  }

  // public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
  public ParseToTwoDecimal(value: number): number {
    if (value != null)
      return Number.parseFloat(this.InputToDecimal(value.toString()));
    else return 0;
  }
  public InputToDecimal(val: string) {
    if (val != null) {
      var splited = val.toString().split(".", 2);
      if (splited[1] != null && splited[1].length > 1) {
        splited[1] = splited[1].substring(0, 2);
        let amount2Decimal = splited[0].concat('.', splited[1]);
        return amount2Decimal;
      }
      return val;
    }
  }
}
