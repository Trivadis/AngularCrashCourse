import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  template: `
    <h2>Exercises</h2>
    <a [routerLink]="['/exercise/databinding']">Databinding</a><br />
    <a [routerLink]="['/exercise/component']">Component</a><br />
    <a [routerLink]="['/exercise/ngfor']">ngFor</a><br />
    <a [routerLink]="['/exercise/ngif']">ngIf</a><br />
    `
})
export class ExerciseListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
