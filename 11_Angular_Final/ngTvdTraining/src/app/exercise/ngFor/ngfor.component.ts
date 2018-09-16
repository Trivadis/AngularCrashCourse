import { Component } from '@angular/core';
import { Employee } from '../../employee/model/employee.model';

@Component({
  selector: 'app-ngfor',
  template: `<h1>Number of Employees {{employees.length}}</h1>
  <p style="font-weight:bold;color:red">TODO: Create a table and fill it with the employees and "ngFor"-directive</p>
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
   `
})
export class NgForComponent {
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
