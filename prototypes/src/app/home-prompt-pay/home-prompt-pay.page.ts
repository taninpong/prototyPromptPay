import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home-prompt-pay',
  templateUrl: './home-prompt-pay.page.html',
  styleUrls: ['./home-prompt-pay.page.scss'],
})
export class HomePromptPayPage implements OnInit {
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fg = this.fb.group({
      'number': null,
      'type': null,
      'price': null,
      'm3': null,
      'm4': null
    });
  }

  ngOnInit() {

  }

  gono1() {
    this.fg.get('number').setValue(1);
    this.fg.get('type').setValue('QR');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono2() {
    this.fg.get('number').setValue(2);
    this.fg.get('type').setValue('QR');
    this.fg.get('price').setValue(500);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono3() {
    this.fg.get('number').setValue(3);
    this.fg.get('type').setValue('QR');
    this.fg.get('price').setValue(500);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono4() {
    this.fg.get('number').setValue(4);
    this.fg.get('type').setValue('QR');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/ppay-payment-creating'], param);
  }
  gono5() {
    this.fg.get('number').setValue(5);
    this.fg.get('type').setValue('PP');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
  gono6() {
    this.fg.get('number').setValue(6);
    this.fg.get('type').setValue('PP');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(true);
    this.fg.get('m4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
  gono7() {
    this.fg.get('number').setValue(7);
    this.fg.get('type').setValue('PP');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(true);
    this.fg.get('m4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
  gono8() {
    this.fg.get('number').setValue(8);
    this.fg.get('type').setValue('PP');
    this.fg.get('price').setValue(1000);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
  gono9() {
    this.fg.get('number').setValue(9);
    this.fg.get('type').setValue('Bank');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(true);
    this.fg.get('m4').setValue(true);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
  gono10() {
    this.fg.get('number').setValue(10);
    this.fg.get('type').setValue('Bank');
    this.fg.get('price').setValue(0);
    this.fg.get('m3').setValue(true);
    this.fg.get('m4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
  gono11() {
    this.fg.get('number').setValue(11);
    this.fg.get('type').setValue('Bank');
    this.fg.get('price').setValue(450);
    this.fg.get('m3').setValue(false);
    this.fg.get('m4').setValue(false);
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
    this.router.navigate(['/account-select'], param);
  }
}
