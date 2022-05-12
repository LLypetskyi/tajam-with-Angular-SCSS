import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel = [
    {
      title: "Slide 1 Title",
      description: "Slide 1 Description",
      learnMoreUrl: "https//:some.url",
    },
    {
      title: "Slide 2 Title",
      description: "Slide 2 Description",
      learnMoreUrl: "https//:some.url",
    },
    {
      title: "Slide 3 Title",
      description: "Slide 3 Description",
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
