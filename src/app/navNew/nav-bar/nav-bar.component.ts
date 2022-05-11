import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: string[] = ['home', 'about', 'expertise', 'teams', 'works', 'people say', 'contact']

  redirectTo(page: string) { 
    console.log("on click page -", page);
   }

  constructor() { }
  ngOnInit(): void {
  }
}
