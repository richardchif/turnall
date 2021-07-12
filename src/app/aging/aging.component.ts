
import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';
import {  ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
//import { MdbTableDirective, MdbTablePaginationComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-aging',
  templateUrl: './aging.component.html',
  styleUrls: ['./aging.component.scss']
})
export class AgingComponent implements OnInit {
  userData:declaredData[];
  declared =new declaredData();
  public in=[];
  en:string;
  sessionValue:string="";
  localValue:string="";
  public Em:string;
  public richy:string;

  constructor(private restApi:RestapiService,private router:Router) { }

  elements: any = [];
  headElements = ['Invoice#', 'Customer', 'PhoneNumber', 'Driver','Drivers#','Quiries','Amount','Days_left'];
  calculateDiff(date1,date0,Paid){
    let ddate:any=new Date(date1);
    let sdate:any=new Date(date0);
    
    let currentDate:any=new Date();
    console.log(currentDate);
    let days=Math.floor((ddate-currentDate)/(1000*60*60*24))+1;
    if(Paid==0){
      if(currentDate<=ddate){
        return days;
      }
      else{
        let odays=Math.floor((currentDate-ddate)/(1000*60*60*24)) ;
        let v="Overdue("+odays+")";
        return v;
      }
    }
    else{
      var answer="PAID";
      return answer;
    }
  }
  amount(amount, deduction){
    if(deduction==0){
      return amount;
    }
    else{
      let newBal=amount-deduction;
      return newBal;
    }
  }
  claim(claim){
    if(claim==""){
      let answer="N/A";
      return answer;
    }
    else{
      return claim;
    }
  }

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
return this.restApi.getAllInvoices()
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

  console.log(key);
return this.restApi.getAp(key)
.subscribe(data=>this.richy=data);
console.log(key);

}

}
