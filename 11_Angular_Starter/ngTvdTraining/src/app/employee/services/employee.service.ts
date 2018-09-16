import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Employee } from './../model/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    const employees: Employee[] = [
      { id: 1, firstname: 'Silvester', lastname: 'Stallone' },
      { id: 2, firstname: 'Thomas', lastname: 'Gassmann', email: 'thomas.gassmann@trivadis.com' },
      { id: 3, firstname: 'Thomas', lastname: 'Huber', email: 'thomas.huber@trivadis.com' },
      { id: 4, firstname: 'Bruce', lastname: 'Willis' },
      { id: 5, firstname: 'Lara', lastname: 'Croft' }
    ];

    return of(employees);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(`${environment.apiBaseUrl}/employees/${id}`)
      .pipe(catchError((error: any) => _throw(error)));
  }

  createEmployee(payload: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(`${environment.apiBaseUrl}/employees`, payload)
      .pipe(catchError((error: any) => _throw(error)));
  }

  updateEmployee(payload: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(`${environment.apiBaseUrl}/employees/${payload.id}`, payload)
      .pipe(catchError((error: any) => _throw(error)));
  }

  removeEmployee(payload: Employee): Observable<any> {
    return this.http
      .delete<any>(`${environment.apiBaseUrl}/employees/${payload.id}`)
      .pipe(catchError((error: any) => _throw(error)));
  }

  checkEmailUnique(email: string) {
    // service call for example
    return of(email).pipe(
      delay(1000),
      map(e => e !== 'info@trivadis.com')
    );
  }
}
