import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-assignd',
  templateUrl: './assignd.component.html',
  styleUrls: ['./assignd.component.scss']
})
export class AssigndComponent implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  public in=[];
  en:string;
  sessionValue:string="";
  assID:string="";
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
onClickChange(){
  this.assID=localStorage.getItem("AssignID"); 
  this.declared.ID=this.assID;

       this.restApi.assID(this.declared)
        .subscribe(data => console.log("Succeeded, result = " + data), 
        (err)=> console.error("Failed! " + err));
        setTimeout(()=>{
          this.router.navigateByUrl('/assignsucc');
        },
        5000); 
      
        
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
  sessionStorage.setItem("AssignID",key);
  this.router.navigateByUrl('/assign');

  console.log(key);
return this.restApi.getAp(key)
.subscribe(data=>this.richy=data);
console.log(key);

}
}
