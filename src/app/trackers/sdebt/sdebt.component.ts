import { Component, OnInit } from '@angular/core';
import { declaredData } from '../../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../../data/restapi.service';

@Component({
  selector: 'app-sdebt',
  templateUrl: './sdebt.component.html',
  styleUrls: ['./sdebt.component.scss']
})
export class SdebtComponent implements OnInit {


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
this.Email();

  }
   
  }
  signout(){
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
return this.restApi.getSInvoices(this.sessionValue)
.subscribe(data=>this.in=data);
}
Email(){
return this.restApi.getDpt(this.sessionValue)
.subscribe(data=>this.Em=data);


}
trackers(){
  this.router.navigateByUrl('/trackers');
}
sdebt(){
  this.router.navigateByUrl('/sdebt');
}
cp(){
  this.router.navigateByUrl('/passc');
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
approve(key:string){
return this.restApi.getAp(key)
.subscribe(data=>this.richy=data);
console.log(key);

}



}
