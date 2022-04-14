import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { EmployeeAPIServiceService } from 'src/app/services/employee-apiservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public employeeId: any;
  public employee:any;
  public errorMsg:any;

  constructor(private route : ActivatedRoute , private empService: EmployeeAPIServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      
      this.employeeId=id;
      console.log(this.employeeId);
    });
    this.empService.getEmployeeById(this.employeeId).subscribe(
      (data)=>{
        this.employee=data;
        console.log(data);
      },
      (error)=> {this.errorMsg=error; console.log(error);}
    )
  }

}
