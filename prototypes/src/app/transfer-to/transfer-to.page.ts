import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    { id: "BBL", name: "กรุงเทพ", logo: "assets/imgs/HowTo/BankLogo/bbl.png" },
    { id: "KBANK", name: "กสิกรไทย", logo: "assets/imgs/HowTo/BankLogo/kbank.png" },
    { id: "KTB", name: "กรุงไทย", logo: "assets/imgs/HowTo/BankLogo/ktb.png" },
    { id: "TTB", name: "ทหารไทยธนชาต", logo: "assets/imgs/HowTo/BankLogo/ttb.png" },
    { id: "SCB", name: "ไทยพาณิชย์", logo: "assets/imgs/HowTo/BankLogo/scb.png" },
    { id: "BAY", name: "กรุงศรีอยุธยา", logo: "assets/imgs/HowTo/BankLogo/bay.png" },
    { id: "GSB", name: "ออมสิน", logo: "assets/imgs/HowTo/BankLogo/gsb.png" },
  ];
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log(this.data);

        }
      });
    }
    this.fg = this.fb.group({
      'PPay': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'id': null,
      'name': null

    });
  }


  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    if (this.fg.valid) {
      console.log("1111");
      this.router.navigate(['/ppay-payment-creating'])
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
}
