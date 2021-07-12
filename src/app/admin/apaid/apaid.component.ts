import { Component, OnInit } from '@angular/core';
import { declaredData } from '../../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../../data/restapi.service';

@Component({
  selector: 'app-apaid',
  templateUrl: './apaid.component.html',
  styleUrls: ['./apaid.component.scss']
})
export class ApaidComponent implements OnInit {

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
    this.router.navigateByUrl('/login');
  }
  aging(){
    this.router.navigateByUrl('/aging');
  }
  claims(){
    this.router.navigateByUrl('/claims');
  }
  home(){
    this.router.navigateByUrl('/ahome')
  }
go(){
sessionStorage.setItem("second",this.Em);
this.localValue=sessionStorage.getItem("second");
console.log("Department"+ this.Em);
console.log("Session Dot "+this.localValue);
}
loadData(){
return this.restApi.paidInvoices()
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

}
