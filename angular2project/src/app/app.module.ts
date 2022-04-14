import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { EmployeeServiceService } from './employee-service.service';


import { EmployeeAPIComponent } from './components/employee-api/employee-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import  {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeListComponent,
    DisplayEmployeeComponent,
    
    EmployeeAPIComponent,
    NavbarComponent,
    EmployeedetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    
    
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
