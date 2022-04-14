import { Component, OnInit } from '@angular/core';
import { EmployeeAPIServiceService } from 'src/app/services/employee-apiservice.service';

@Component({
  selector: 'app-employee-api',
  templateUrl: './employee-api.component.html',
  styleUrls: ['./employee-api.component.css']
})
export class EmployeeAPIComponent implements OnInit {
  public employees:any;
  public errorMsg :any;

  constructor(private eService: EmployeeAPIServiceService) { }

  ngOnInit(): void {
    this.eService.getEmployees().subscribe(
      (data)=>{
        this.employees = data;
        console.log(data)
      },
      (error) => this.errorMsg = error,
      () => console.log("Completed")
    )
  }

}
