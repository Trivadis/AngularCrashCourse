import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <h1>{{ title }}</h1>
    <input type="text" [(ngModel)]="title">
  `
})
export class DatabindingComponent implements OnInit {
  title = 'Databinding Test';

  constructor() {}

  ngOnInit() {}
}
