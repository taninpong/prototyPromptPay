import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-option-dialog-template',
  templateUrl: './option-dialog-template.page.html',
  styleUrls: ['./option-dialog-template.page.scss'],
})
export class OptionDialogTemplatePage implements OnInit {

  // Reference from "account-bank-select"
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
    
  onClick(){
    this.navCtrl.back({ animated: false });
  }


}
