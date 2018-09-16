import { Component } from '@angular/core';
import { Employee } from '../../employee/model/employee.model';

@Component({
  selector: 'app-ngfor',
  template: `<h1>Number of Employees {{employees.length}}</h1>
  <p style="font-weight:bold;color:red">TODO: Create a table and fill it with the employees and "ngFor"-directive</p>
   `
})
export class NgForComponent {
  employees: Employee[] = EMPLOYEES;
}

const EMPLOYEES: Employee[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen' },
  { firstname: 'Thomas', lastname: 'Huber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }
];
