import { Type } from '@angular/core';

export class ComponentItem {
  constructor(public menuName: any, public component: Type<any>, public data: any) {}
}
