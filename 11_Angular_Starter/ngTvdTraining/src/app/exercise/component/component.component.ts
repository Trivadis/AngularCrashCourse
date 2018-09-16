import { Component } from '@angular/core';
import { Employee } from '../../employee/model/employee.model';

@Component({
  selector: 'app-component',
  template: `<h1>Click an employee to select it</h1>
           <table>
             <tr>
               <th>Firstname</th>
               <th>Lastname</th>
             </tr>
             <tr *ngFor="let empl of employees" (click)="onEmployeeClick(empl)">
               <td>{{empl.firstname}}</td>
               <td>{{empl.lastname}}</td>
             </tr>
           </table>

        <p style="font-weight:bold;color:red">TODO: Move selected employee code to a Detail-component</p>

        <div *ngIf="selectedEmployee">
		     Selected Employee:
           <div>
             <label for="firstname" >Firstname: </label>
             <input id="firstname" type="text" [(ngModel)]="selectedEmployee.firstname"/>
           </div>
           <div>
             <label for="lastname" >Firstname: </label>
             <input id="lastname" type="text" [(ngModel)]="selectedEmployee.lastname"/>
           </div>
        </div>
            `
})
export class ComponentComponent {
  employees: Employee[] = EMPLOYEES;
  selectedEmployee: Employee;

  onEmployeeClick(e: Employee) {
    this.selectedEmployee = e;
  }
}

const EMPLOYEES: Employee[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen' },
  { firstname: 'Thomas', lastname: 'Huber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }
];
