import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  public employees:any;
  
  constructor(private empService : EmployeeServiceService, private router : Router) { }

  ngOnInit(): void {
    this.employees = this.empService.getEmployees();
  }


  
  
  
  onSelect(employees: any){
    this.router.navigate(['/employees/',employees.id])

  }

}
