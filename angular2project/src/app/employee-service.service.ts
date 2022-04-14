import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  public employees =[
    {'id':'1','FirstName': 'Iro', 'LastName':'Kocani','Salary':1000,'Departament':'CSC'},
    {'id':'2','FirstName': 'Abby', 'LastName':'Smith','Salary':2000,'Departament':'IT'},
    {'id':'3','FirstName': 'Bob', 'LastName':'Reyes','Salary':4000,'Departament':'CSC'},
    {'id':'4','FirstName': 'Rey', 'LastName':'sanchez','Salary':5000,'Departament':'IT'},

  ]

  public getEmployees(){
    return this.employees;

  }


  constructor() { }
}
