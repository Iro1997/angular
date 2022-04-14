import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:any;
  constructor(private empService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees = this.empService.getEmployees();
  }

}
