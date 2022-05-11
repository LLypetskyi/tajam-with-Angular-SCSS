import { Component, OnInit, Input, } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() ageFromParent = 0;
  @Output() clickFromChild1 = new EventEmitter();

   addEventClick1() {
    this.clickFromChild1.emit();
  }

  constructor() { }
  ngOnInit(): void {
  }
}
