import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  selectUrl: string = 'Some URL for story component';

  redirectTo(url: string) {
    this.selectUrl = url;
    console.log(this.selectUrl)
  }

  constructor() { }
  ngOnInit(): void {
  }

}
