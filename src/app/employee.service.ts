import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9191/employees';
  // private baseUrl = '';

  // employee: Employee = {
  //   id: null,
  //   firstName: '',
  //   surname: '',
  //   dateOfBirth: '',
  //   adharCard: null,
  //   dateOfJoining: '',
  //   passportNo: '',
  //   panNumber: '',
  //   placeOfWorking: '',
  //   mobileNo: null
  // }
  employee: Employee = new Employee()
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/' + 'save', employee);
  }

  updateEmployee(value: any): Observable<Object> {
    return this.http.put(this.baseUrl + '/' + 'updateEmployee', value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + 'deleteByIdEmployee' + '/' + id);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(this.baseUrl + '/' + 'getEmployeeByName');
  }

}
