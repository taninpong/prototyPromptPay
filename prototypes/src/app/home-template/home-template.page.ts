import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.page.html',
  styleUrls: ['./home-template.page.scss'],
})
export class HomeTemplatePage implements OnInit {

  public slideOpts = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode: true
  };
  
  constructor() { }

  ngOnInit() {
  }

}
