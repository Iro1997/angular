import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from '../components/employee-api/models/employee';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIServiceService {
  private _url : string = "http://localhost:3000/employees"

  constructor(private http : HttpClient) { }


  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getEmployeeById(id: number): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
