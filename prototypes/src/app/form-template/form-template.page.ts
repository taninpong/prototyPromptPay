import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.page.html',
  styleUrls: ['./form-template.page.scss'],
})
export class FormTemplatePage implements OnInit {

  // Reference from "user-profile-new-address"
  constructor() {
    // Do not forget import "ReactiveFormsModule" in "module.ts"
  }

  ngOnInit() {
  }

}
