import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.page.html',
  styleUrls: ['./account-select.page.scss'],
})
export class AccountSelectPage implements OnInit {
  public fg: FormGroup;
  // type: any;
  // enable: null;
  data: any;
  type: string;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public alertController: AlertController) {
    // this.route.queryParams.subscribe(params => {
    //   let value = params["data"];
    //   if (value) {
    //     this.data = JSON.parse(value);
    //   }
    //   console.log(this.data,this.data.type);
    // });
    let value = this.route.snapshot.queryParams.data;
    this.data = JSON.parse(value);
    this.type = this.data.type;
    console.log(this.data);
  }

  ngOnInit() {
  }

  async goPP() {
    if (this.type == 'Bank') {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'เลือกธนาคารสิ',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      await this.router.navigate(['/transfer-to'], { queryParams: { data: JSON.stringify(this.data) } });
    }

  }
  async goBank() {
    console.log(1);
    if (this.type == 'PP') {
      console.log(2);

      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'เลือกพร้อมเพย์สิ',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      await this.router.navigate(['/transfer-to'], { queryParams: { data: JSON.stringify(this.data) } });
    }
  }
}
