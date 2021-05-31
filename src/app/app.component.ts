import { Component, OnInit } from '@angular/core';

import { ComponentsList } from './component.service';
import { ComponentItem } from './component-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <sidebar-menu [componentItem]="componentItem"></sidebar-menu>
    </div>
  `
})
export class AppComponent implements OnInit {
  componentItem: any = [];

  constructor(private componentList: ComponentsList) {}

  ngOnInit() {
    this.componentItem = this.componentList.getComponents();
  }
}

