import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent2 } from './example-components/example-component-2';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdDirective } from './component.directive';
import { ComponentsList } from './component.service';
import { ExampleComponent1 } from './example-components/example-component-1';

@NgModule({
  imports: [BrowserModule],
  providers: [ComponentsList],
  declarations: [AppComponent,
    SidebarComponent,
    ExampleComponent1,
    ExampleComponent2,
    AdDirective],
  entryComponents: [ExampleComponent1, ExampleComponent2],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

