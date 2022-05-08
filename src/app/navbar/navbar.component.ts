import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: string[] = ['HOME','ABOUT','EXPERTISE','TEAMS','WORKS','PEOPLE SAY','CONTACT'];
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
