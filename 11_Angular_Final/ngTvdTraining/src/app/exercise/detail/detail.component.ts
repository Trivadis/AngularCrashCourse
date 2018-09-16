import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../employee/model/employee.model';

@Component({
  selector: 'app-employee-detail',
  template: `
         <div *ngIf="employee">
		     Selected Employee:
           <div>
             <label for="firstname" >Firstname: </label>
             <input id="firstname" type="text" [(ngModel)]="employee.firstname"/>
           </div>
           <div>
             <label for="lastname" >Firstname: </label>
             <input id="lastname" type="text" [(ngModel)]="employee.lastname"/>
           </div>
           <div>
             <label for="email" >Email: </label>
             <input id="email" type="text" [(ngModel)]="employee.email"/>
           </div>
           <button (click)="onRemove()">Remove</button>
        </div>`
})
export class DetailComponent {
  @Input()
  employee: Employee;

  @Output()
  remove: EventEmitter<Employee> = new EventEmitter();

  onRemove() {
    this.remove.emit(this.employee);
  }
}
