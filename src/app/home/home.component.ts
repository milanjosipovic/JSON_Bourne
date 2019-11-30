import { Component, OnInit } from '@angular/core';

// Import Swiper from node_modules
import Swiper from '../../../node_modules/swiper/js/Swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
        // Slider
        var mySwiper = new Swiper(".swiper-container", {
          // Optional parameters
          spaceBetween: 10,
          slidesPerView: 5.7,
          effect: "slide",
          autoplay: {
            delay: 4000
          }
        });
  }
}
