import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-receive-data',
  templateUrl: './form-receive-data.page.html',
  styleUrls: ['./form-receive-data.page.scss'],
})
export class FormReceiveDataPage implements OnInit {

  public data: any;
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.fg = this.fb.group({
      'Number': null,
      'Type': null,
      'Price': null,
      'M3': null,
      'M4': null,
      'M5': null
    });
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          this.fg.setValue(this.data);
          console.log(this.fg.value);
          
        }
      });
    }
   
  }

  ngOnInit() {
  }

}
