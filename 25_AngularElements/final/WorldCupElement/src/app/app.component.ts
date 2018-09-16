import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>Demo Angular Elements</div>
  <app-matches-by-country [country]="'SUI'"></app-matches-by-country>
  `
})
export class AppComponent {
  constructor() {}
}
