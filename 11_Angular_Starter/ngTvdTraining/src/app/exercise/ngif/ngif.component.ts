import { Component } from '@angular/core';
import { Employee } from '../../employee/model/employee.model';

@Component({
  selector: 'app-ngif',
  template: `<h1>Number of Employees {{employees.length}}</h1>
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
  <div>
    <label for="firstname" >Selected Employee</label>
    <input id="firstname" type="text" [(ngModel)]="selectedEmployee.firstname"/>
  </div>
  <div>
    <p style="font-weight:bold;color:red">
        Display the div with the firstname-input only if an employee is selected. Use "ngIf" to do this!</p>
  </div>`
})
export class NgifComponent {
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
