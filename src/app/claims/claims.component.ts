import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {


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

go(){
sessionStorage.setItem("second",this.Em);
this.localValue=sessionStorage.getItem("second");
}
loadData(){
return this.restApi.getData(this.sessionValue)
.subscribe(data=>this.in=data);
}

goTOInternal(){
this.router.navigateByUrl('/internal');
}
goToP(){
this.router.navigateByUrl('/password');
}
goToPending(){
 this.go();
this.router.navigateByUrl('/pending');
}
 goToIssue(){
   this.go();
this.router.navigateByUrl('/issue');
}

approve(key:string){
return this.restApi.getAp(key)
.subscribe(data=>this.richy=data);
console.log(key);

}

signout(){
  sessionStorage.removeItem("second");
  	localStorage.removeItem("first");
    localStorage.removeItem("pass");
    localStorage.removeItem("order");
  this.router.navigateByUrl('/login');
}
home(){
  this.router.navigateByUrl('/ahome')
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
aging(){
this.router.navigateByUrl('/aging');
}
claims(){
this.router.navigateByUrl('/claims');
}
onClickChange(){
       this.restApi.dinvoice(this.declared)
        .subscribe(data => console.log("Succeeded, result = " + data), 
        (err)=> console.error("Failed! " + err));
        
}


}
