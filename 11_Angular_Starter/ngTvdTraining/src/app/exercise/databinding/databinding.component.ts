import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <h1>Show title from component</h1>
            <input type="text" [value]="title">
  `
})
export class DatabindingComponent implements OnInit {
  title = 'Databinding Test';

  constructor() {}

  ngOnInit() {}
}
