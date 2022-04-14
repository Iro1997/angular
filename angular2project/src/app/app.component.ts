import { Component } from '@angular/core';

import { Employee } from './employee';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2project';

 

  //counter: number = 0;

  //onChange(count:any){
    //this.counter = count;

  products:Employee[];
  productService;


  constructor(){
    this.productService= new EmployeeServiceService();
  }

  getProducts(){
    this.products=this.productService.getEmployees();
  }
}
