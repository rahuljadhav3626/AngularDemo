import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

 // employee: Employee = new Employee();
  submitted = false;


  constructor(public employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }
  newEmployee(): void {
    this.submitted = false;
    this.employeeService.employee = new Employee();
  }
  save() {
    this.employeeService
      .createEmployee(this.employeeService.employee).subscribe(data => {
        console.log(data)
        this.employeeService.employee = new Employee();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    if(this.employeeService.employee.id == null){
      this.save();
    }else{
      this.updateEmployee();
    }

  }
  updateEmployee() {
    this.employeeService
    .updateEmployee(this.employeeService.employee).subscribe(data => {
      console.log(data)
      this.employeeService.employee = new Employee();
      this.gotoList();
    },
      error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
