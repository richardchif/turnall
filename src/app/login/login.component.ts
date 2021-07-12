import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, RouterModule,Routes} from "@angular/router";
import { RestapiService } from '../data/restapi.service';
import { declaredData } from '../data/data';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
    constructor( private router:Router,private restApi:RestapiService) {
  
    }
    userData:declaredData[];
    declared =new declaredData();
    public push=[];
    ngOnInit(): void {
    }
  
    onSubmit(){

      console.log(this.declared.Email);
      localStorage.setItem("first", this.declared.Email);
       localStorage.setItem("second", this.declared.Password);
       this.router.navigateByUrl('/loadinga');

}
    
}
