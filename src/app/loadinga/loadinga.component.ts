import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';


@Component({
  selector: 'app-loadinga',
  templateUrl: './loadinga.component.html',
  styleUrls: ['./loadinga.component.scss']
})
export class LoadingaComponent implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];
  sessionEmail:string="";
  sessionPass:string="";

  ngOnInit(): void {
  	this.sessionEmail=localStorage.getItem("first"); 
    this.sessionPass=localStorage.getItem("second");
    
  	this.declared.Email=this.sessionEmail;
    this.declared.Password=this.sessionPass;
    
  	console.log(this.declared);
  	setTimeout(()=>{
  		this.restApi.signa(this.declared)
          .subscribe(data => (this.router.navigateByUrl('/'+data)), 
          (err)=> console.error("Failed! " + err));
  	},
  	5000); 
  	
  }

}
