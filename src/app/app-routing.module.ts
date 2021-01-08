import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
// import { AdminComponent } from './users/admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {DoctorComponent} from './users/doctor/doctor.component'
import { PatientComponent } from './users/patient/patient.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ReceptionistComponent } from './users/receptionist/receptionist.component';
import { RegisterComponent } from './admin-login/register/register.component';
const routes : Routes=[{
  path:'admin',
  component:AdminLoginComponent
},
{
  path:'doctor',
  component:DoctorComponent
},
{
  path:'patient',
  component:PatientComponent
},{
  path:'register',
  component:RegisterComponent
},
{
  path:'receptionist',
  component:ReceptionistComponent
},
{
  path:'**',
  component:NotFoundComponent
},
{
  path:'home',
  component:AppComponent
},
 {
  path: '', 
    redirectTo: 'home',
     pathMatch: 'full' },
    ]

@NgModule({
  // declarations: [
    
  // ],
  imports: [
 


CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
