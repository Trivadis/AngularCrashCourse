import { Component } from '@angular/core';
import { Employee } from '../../employee/model/employee.model';

@Component({
  selector: 'app-component',
  template: `<h1>Click an employee to select it</h1>
           <table class="table">
             <tr>
               <th>Firstname</th>
               <th>Lastname</th>
               <th>E-Mail</th>
             </tr>
             <tr *ngFor="let empl of employees" (click)="onEmployeeClick(empl)">
               <td>{{empl.firstname}}</td>
               <td>{{empl.lastname}}</td>
               <td>{{empl.email}}</td>
             </tr>
           </table>

        <p style="font-weight:bold;color:red">TODO: Move selected employee code to a Detail-component</p>

        <app-employee-detail [employee]="selectedEmployee" (remove)="onRemove($event)"></app-employee-detail>

            `
})
export class ComponentComponent {
  employees: Employee[] = EMPLOYEES;
  selectedEmployee: Employee;

  onEmployeeClick(e: Employee) {
    this.selectedEmployee = e;
  }

  onRemove(employee: Employee) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      // manipulate existing instance
      this.employees.splice(index, 1);
    }

    // create a new instance (immutable)
    // this.employees = [...this.employees.slice(0, index), ...this.employees.slice(index + 1)];

    this.selectedEmployee = null;
  }
}

const EMPLOYEES: Employee[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen' },
  { firstname: 'Thomas', lastname: 'Huber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }
];
