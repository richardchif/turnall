import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-assignsucc',
  templateUrl: './assignsucc.component.html',
  styleUrls: ['./assignsucc.component.scss']
})
export class AssignsuccComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigateByUrl('/ahome');
  	},
  	5000); 
  }

}
