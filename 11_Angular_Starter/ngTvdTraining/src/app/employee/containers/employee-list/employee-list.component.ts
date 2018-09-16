import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../model/employee.model';
import * as fromService from '../../services';

@Component({
  templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  listFilter: string;

  constructor(private service: fromService.EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.service.getEmployees();
  }
}
