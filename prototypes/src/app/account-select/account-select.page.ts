import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(params => {
    //   let value = params["data"];
    //   if (value) {
    //     this.data = JSON.parse(value);
    //   }
    //   console.log(this.data,this.data.type);
    // });
    let value = this.route.snapshot.queryParams.data;
    this.data = JSON.parse(value);
    console.log(this.data);
    console.log(this.data.number);
  }

  ngOnInit() {
  }
}
