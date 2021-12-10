import { Component } from '@angular/core';
import '@web-comp-app/shared/ui-components';

@Component({
  selector: 'web-comp-app-root',
  template: `
    <h1>Angular App</h1>
    <button (click)="onIncrement()">Increment</button>
    <wc-button [attr.count]="count"></wc-button>
  `,
})
export class AppComponent {
  count = 0;

  onIncrement() {
    ++this.count;
  }
}
