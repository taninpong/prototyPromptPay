import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account-bank-select2',
  templateUrl: './account-bank-select2.page.html',
  styleUrls: ['./account-bank-select2.page.scss'],
})
export class AccountBankSelect2Page implements OnInit {
  public data = [
    { id: "BBL", name: "กรุงเทพ", logo: "assets/imgs/HowTo/BankLogo/bbl.png" },
    { id: "KBANK", name: "กสิกรไทย", logo: "assets/imgs/HowTo/BankLogo/kbank.png" },
    { id: "KTB", name: "กรุงไทย", logo: "assets/imgs/HowTo/BankLogo/ktb.png" },
    { id: "TTB", name: "ทหารไทยธนชาต", logo: "assets/imgs/HowTo/BankLogo/ttb.png" },
    { id: "SCB", name: "ไทยพาณิชย์", logo: "assets/imgs/HowTo/BankLogo/scb.png" },
    { id: "BAY", name: "กรุงศรีอยุธยา", logo: "assets/imgs/HowTo/BankLogo/bay.png" },
    { id: "GSB", name: "ออมสิน", logo: "assets/imgs/HowTo/BankLogo/gsb.png" },
  ];
  public fg: FormGroup;
  public note: string;
  public logo: string;
  public isFirstTime: boolean = true;
  @Input() confirmFunction: (name: string, logo: any) => void;

  constructor(private fb: FormBuilder, public modalController: ModalController) {
    this.fg = this.fb.group({
      'id': null,
      'name': null,
      'logo': null,
    });
  }

  ngOnInit() {
  }

  onSelectItem(item) {
    this.fg.get("id").setValue(item.id);
    this.fg.get("name").setValue(item.name);
    this.fg.get("logo").setValue(item.logo);
  }

  public isChecked(value): boolean {
    return this.fg.get("id").value == value.id;
  }

  public onSave(item) {
    console.log(1);
    this.fg.get("id").setValue(item.id);
    this.fg.get("name").setValue(item.name);
    this.fg.get("logo").setValue(item.logo);
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      this.confirmFunction(this.fg.get('name').value, this.fg.get('logo').value);
      this.modalController.dismiss();
    }
  }

  public CloseDialog() {
    this.modalController.dismiss();
  }

}
