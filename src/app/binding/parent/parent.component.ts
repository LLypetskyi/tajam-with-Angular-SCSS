import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  age: number = 7;
  name: string = "Vova";

  constructor() { }
  ngOnInit(): void {
  }

  incrementAge(age: number) {
    this.age = this.age + 1;
  }
  replaceName(name: string) {
     this.name = this.name + " " + (Math.floor(Math.random() * 99)); 
  }

}
