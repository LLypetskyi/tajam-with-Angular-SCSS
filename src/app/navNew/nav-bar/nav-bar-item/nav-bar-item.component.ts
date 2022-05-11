import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss']
})
export class NavBarItemComponent implements OnInit {
  @Input() menuItem = "";
  @Output() itemEvent = new EventEmitter<string>();  

    pushItem(item: string) {
    this.itemEvent.emit(item);
  }
  constructor() { }
  ngOnInit(): void { }
}
