import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';


// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AdminLoginComponent,
    RegisterComponent
  ],
  imports: [
  NgbModule,
  ReactiveFormsModule,
  CommonModule
  ],
  exports:[AdminLoginComponent,RegisterComponent]
})
export class AdminLoginModule { }
