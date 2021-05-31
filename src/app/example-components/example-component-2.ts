import { Component, Input } from '@angular/core';

import { MenuComponent } from '../component.interface';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class ExampleComponent2 implements MenuComponent {
  @Input() data: any;

}

