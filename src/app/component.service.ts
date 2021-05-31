import { Injectable } from '@angular/core';

import { ExampleComponent2 } from './example-components/example-component-2';
import { ComponentItem } from './component-item';
import { ExampleComponent1 } from './example-components/example-component-1';

@Injectable()
export class ComponentsList {
  getComponents() {
    return [
      new ComponentItem('Example1', ExampleComponent1, { name: 'Example1', bio: 'This is a example1 Component' }),

      new ComponentItem('Example2', ExampleComponent1, { name: 'Example2', bio: 'This is a example2 Component' }),

      new ComponentItem('Example3', ExampleComponent2, {
        headline: 'Something different',
        body: 'Example with Different UI'
      }),

      new ComponentItem('Example4', ExampleComponent2, {
        headline: 'Something different',
        body: 'New template'
      }),
    ];
  }

  /*  [
   {menuName: 'Example1', component:new ComponentItem(ExampleComponent1, { name: 'Bombasto', bio: 'Brave as they come' })},
    {menuName: 'Example1', component:new ComponentItem(ExampleComponent1, { name: 'Bombasto', bio: 'Brave as they come' })},
    {menuName: 'Example1', component:new ComponentItem(ExampleComponent1, { name: 'Bombasto', bio: 'Brave as they come' })}, 
   ]*/
}
