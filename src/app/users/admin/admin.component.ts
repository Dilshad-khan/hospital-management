import { Component, OnInit } from '@angular/core';
// import {adminLogo} from '../../.././assets/admin.png'
;



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  logo='./../../../assets/admin.png'

  ngOnInit(): void {
  }

}
