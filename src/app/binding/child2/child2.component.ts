import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Input() nameFromParent = "";
  @Output() clickFromChild2 = new EventEmitter();

  addEventClick2() {
    this.clickFromChild2.emit();
  }
  constructor() { }
  ngOnInit(): void {
  }
}
