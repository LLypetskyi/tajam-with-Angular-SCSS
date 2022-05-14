import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel = [
    {
      title: "We Are Awesome Creative Agency",
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      learnMoreUrl: "https//:some.url",
    },
    {
      title: "2 We Are Awesome Creative",
      description: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi debitis dolor, nesciunt ipsa eveniet suscipit natus molestias et excepturi doloremque, magni magnam in. Sint quaerat aspernatur impedit libero minus natus",
      learnMoreUrl: "https//:some.url",
    },
    {
      title: "3 We Are Awesome",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, ad beatae corporis at fuga, fugiat aliquid nihil magni, iste autem qui ducimus quod ut aliquam voluptate nisi.Ab, eius sunt!",
      learnMoreUrl: "https//:some.url",
    },
    {
      title: "4 We Are",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, ad beatae corporis at fuga, fugiat aliquid nihil magn aliquam voluptate nisi.Ab, eius sunt!",
      learnMoreUrl: "https//:some.url",
    }
  ]
  selectedIndex = 0;

  navigateTo(idx: number) {
    this.selectedIndex = idx;
    console.log(this.selectedIndex)
  }

  constructor() { }
  ngOnInit(): void {
  }

}
