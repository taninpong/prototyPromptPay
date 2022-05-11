import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-receive-data',
  templateUrl: './form-receive-data.page.html',
  styleUrls: ['./form-receive-data.page.scss'],
})
export class FormReceiveDataPage implements OnInit {

  public data: any;

  constructor(private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
        }
      });
    }
  }

  ngOnInit() {
  }

}
