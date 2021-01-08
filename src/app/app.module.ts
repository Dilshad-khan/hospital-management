import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './users/admin/admin.component';
import { DoctorComponent } from './users/doctor/doctor.component';
import { PatientComponent } from './users/patient/patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReceptionistComponent } from './users/receptionist/receptionist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './admin-login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    AdminComponent,
    DoctorComponent,
    PatientComponent,
    FooterComponent,
    NotFoundComponent,
    ReceptionistComponent,
    AdminLoginComponent,
    RegisterComponent
  ],
  imports: [



  BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
