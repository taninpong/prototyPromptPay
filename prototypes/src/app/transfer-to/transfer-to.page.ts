import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AccountBankSelectPage } from '../account-bank-select/account-bank-select.page';
import { AccountBankSelect2Page } from '../account-bank-select2/account-bank-select2.page';

@Component({
  selector: 'app-transfer-to',
  templateUrl: './transfer-to.page.html',
  styleUrls: ['./transfer-to.page.scss'],
})
export class TransferToPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;
  data: any;
  public databank = [
    { id: "BBL", name: "กรุงเทพ", logo: "assets/imgs/bbl.png" },
    { id: "KBANK", name: "กสิกรไทย", logo: "assets/imgs/kbank.png" },
    { id: "KTB", name: "กรุงไทย", logo: "assets/imgs/ktb.png" },
    { id: "TTB", name: "ทหารไทยธนชาต", logo: "assets/imgs/ttb.png" },
    { id: "SCB", name: "ไทยพาณิชย์", logo: "assets/imgs/scb.png" },
    { id: "BAY", name: "กรุงศรีอยุธยา", logo: "assets/imgs/bay.png" },
    { id: "GSB", name: "ออมสิน", logo: "assets/imgs/gsb.png" },
  ];
  displayBankName: any;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public modalController: ModalController) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.fg.get('Accountnumber').setValue('');
          this.data = JSON.parse(value);
          console.log("xxx", this.data);
          this.fg.patchValue(this.data);
          console.log(this.fg.value);
          if (this.fg.get('Type').value == 'Bank') {
            this.openSelectBankDialog();
          }
        }
      });
    }
    this.fg = this.fb.group({
      'Accountnumber': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      'Number': null,
      'Type': null,
      'Price': 0,
      'M3': null,
      'M4': null,
      'Bankname': null,
      'BankLogo': null,
    });

  }


  ngOnInit() {
  }

  onSave() {
    console.log(1);

    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    if (this.fg.valid) {
      console.log(this.fg.value);

      console.log("1111");
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };

      this.router.navigate(['/ppay-payment-creating'], param)
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

  onSelectItem(item) {
    this.fg.get("id").setValue(item.id);
    this.fg.get("name").setValue(item.name);
  }

  public isChecked(value): boolean {
    return this.fg.get("id").value == value.id;
  }

  async openSelectBankDialog() {
    if (this.fg.get('Number').value == 12 || this.fg.get('Number').value == 13 || this.fg.get('Number').value == 14) {
      const modal = await this.modalController.create({
        component: AccountBankSelect2Page,
        componentProps: {
          'confirmFunction': (note: string, logo: any) => {
            this.fg.get("Bankname").setValue(note);
            this.fg.get("BankLogo").setValue(logo);
          }
        }
      });
      return await modal.present();
    } else {
      const modal = await this.modalController.create({
        component: AccountBankSelectPage,
        componentProps: {
          'confirmFunction': (note: string, logo: any) => {
            this.fg.get("Bankname").setValue(note);
            this.fg.get("BankLogo").setValue(logo);
          }
        }
      });
      return await modal.present();
    }
  }
}
