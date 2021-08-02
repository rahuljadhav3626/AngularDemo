import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../employee";
import { Router } from '@angular/router';
import { EmployeeService } from "../employee.service";
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();

  }
  reloadData() {
    this.employeeService.getEmployeesList().subscribe(
      (response) => {
        console.log(response);
        this.employees = response;
      }
    )
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        }
      )
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  editEmployee(employee: Employee) {
    this.employeeService.employee = Object.assign({}, employee);
    this.router.navigate(['/add']);

  }

}
