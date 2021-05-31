import { Component, Input } from '@angular/core';
import { MenuComponent } from '../component.interface';


@Component({
  template: `
    <div class="hero-profile">     
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Sample template without routing</strong>
    </div>
  `
})
export class ExampleComponent1 implements MenuComponent {
  @Input() data: any;
}


