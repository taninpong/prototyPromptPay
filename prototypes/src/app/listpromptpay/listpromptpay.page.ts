import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listpromptpay',
  templateUrl: './listpromptpay.page.html',
  styleUrls: ['./listpromptpay.page.scss'],
})
export class ListpromptpayPage implements OnInit {
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fg = this.fb.group({
      'Number': null,
      'Type': null,
      'Price': null,
      'M3': null,
      'M4': null
    });
  }
  ngOnInit() {
  }

  gono888() {
    this.fg.get('Number').setValue(888);
    this.fg.get('Type').setValue('QR');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }

  gono999() {
    this.fg.get('Number').setValue(999);
    this.fg.get('Type').setValue('QR');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }

  gono1() {
    this.fg.get('Number').setValue(1);
    this.fg.get('Type').setValue('QRP');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono2() {
    this.fg.get('Number').setValue(2);
    this.fg.get('Type').setValue('QRP');
    this.fg.get('Price').setValue(500);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono3() {
    this.fg.get('Number').setValue(3);
    this.fg.get('Type').setValue('QRP');
    this.fg.get('Price').setValue(500);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono4() {
    this.fg.get('Number').setValue(4);
    this.fg.get('Type').setValue('QRB');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono5() {
    this.fg.get('Number').setValue(5);
    this.fg.get('Type').setValue('QRB');
    this.fg.get('Price').setValue(450);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono6() {
    this.fg.get('Number').setValue(6);
    this.fg.get('Type').setValue('QRB');
    this.fg.get('Price').setValue(100);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono7() {
    this.fg.get('Number').setValue(7);
    this.fg.get('Type').setValue('PA');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono8() {
    this.fg.get('Number').setValue(8);
    this.fg.get('Type').setValue('BA');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono9() {
    this.fg.get('Number').setValue(9);
    this.fg.get('Type').setValue('alipay');
    this.fg.get('Price').setValue(100);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono10() {
    this.fg.get('Number').setValue(10);
    this.fg.get('Type').setValue('crypto');
    this.fg.get('Price').setValue(1.00);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono11() {
    this.fg.get('Number').setValue(11);
    this.fg.get('Type').setValue('PP');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }

  gono12() {
    this.fg.get('Number').setValue(12);
    this.fg.get('Type').setValue('Bank');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }

  gono13() {
    this.fg.get('Number').setValue(12);
    this.fg.get('Type').setValue('Bank');
    this.fg.get('Price').setValue(0);
    this.fg.get('M3').setValue(false);
    this.fg.get('M4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/form-receive-data'], param);
  }


}
