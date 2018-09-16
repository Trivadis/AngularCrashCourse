import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../model/employee.model';
import * as fromService from '../../services';

@Component({
  templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  listFilter: string;

  constructor(private service: fromService.EmployeeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.employees$ = this.service.getEmployees();
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
  }
}
