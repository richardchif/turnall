import { Component, OnInit } from '@angular/core';
import { declaredData } from '../../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../../data/restapi.service';


@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.scss']
})
export class AhomeComponent implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  public in=[];
  en:string;
  sessionValue:string="";
  localValue:string="";
  public Em:string;
  public richy:string;
  

constructor(private restApi:RestapiService,private router:Router) { }


ngOnInit(): void {
  this.sessionValue=localStorage.getItem("first"); 
  if(this.sessionValue==null){
    this.router.navigateByUrl('/login');
  }
  else{
    this.loadData();


  }
   
  }
  signout(){
    sessionStorage.removeItem("SessionPassword");
    sessionStorage.removeItem("SessionEmail");
    sessionStorage.removeItem("AssignID");
    sessionStorage.removeItem("second");
  	localStorage.removeItem("first");
    localStorage.removeItem("pass");
    localStorage.removeItem("order");
    this.router.navigateByUrl('/login');
  }
go(){
sessionStorage.setItem("second",this.Em);
this.localValue=sessionStorage.getItem("second");
console.log("Department"+ this.Em);
console.log("Session Dot "+this.localValue);
}
loadData(){
return this.restApi.getInvoices()
.subscribe(data=>this.in=data);
}

home(){
  this.router.navigateByUrl('/ahome');
}
cp(){
  this.router.navigateByUrl('/changepassword');
}
nu(){
this.router.navigateByUrl('/newuser');
}
ch(){
this.router.navigateByUrl('/changepassword');
}
ds(){

this.router.navigateByUrl('/apaid');
}
 ai(){
  
this.router.navigateByUrl('/newinvoice');
}
at(){
  
this.router.navigateByUrl('/acredit');
}
assignDuty(key:string){
  localStorage.setItem("AssignID",key);
  this.router.navigateByUrl('/assign');
/*
  console.log(key); 
return this.restApi.getAp(key)
.subscribe(data=>this.richy=data);
console.log(key);*/

}
claims(){
this.router.navigateByUrl('/claims');
}
aging(){
this.router.navigateByUrl('/aging');
}

}
