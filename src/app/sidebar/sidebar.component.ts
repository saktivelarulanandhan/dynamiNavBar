import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from '../component.directive';
import { ComponentItem } from '../component-item';
import { MenuComponent } from '../component.interface';
import { ComponentsList } from '../component.service';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar.component.html',  
  styleUrls: ['./sidebar.component.css']  
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() componentItem: ComponentItem[] = [];
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: any;
  sidebarMenu: any; 

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private componentList: ComponentsList) { }

  ngOnInit() {
    this.sidebarMenu = this.componentList.getComponents();
    this.loadComponent(0);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(index) {
    const adItem = this.componentItem[index];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<MenuComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

}
