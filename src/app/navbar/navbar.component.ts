import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: string[] = ['home','about','expertise','teams','works','people say','contact'];
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
