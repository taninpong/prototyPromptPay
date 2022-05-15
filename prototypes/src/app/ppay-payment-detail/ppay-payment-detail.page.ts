import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ppay-payment-detail',
  templateUrl: './ppay-payment-detail.page.html',
  styleUrls: ['./ppay-payment-detail.page.scss'],
})
export class PpayPaymentDetailPage implements OnInit {

  constructor(private router: Router) { }

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
