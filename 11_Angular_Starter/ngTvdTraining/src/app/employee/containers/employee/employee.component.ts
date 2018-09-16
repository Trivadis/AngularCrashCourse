import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../model/employee.model';
import * as fromService from '../../services';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employee$: Observable<Employee>;

  constructor(
    private service: fromService.EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const eId = +p.get('employeeId');
      if (eId > 0) {
        this.employee$ = this.service.getEmployee(eId);
      }
    });
  }

  onCreate(event: Employee) {
    this.service.createEmployee(event).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }

  onUpdate(event: Employee) {
    this.service.updateEmployee(event).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }

  onRemove(event: Employee) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.service.removeEmployee(event).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
