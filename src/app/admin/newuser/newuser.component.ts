import { Component, OnInit } from '@angular/core';
import { declaredData } from '../../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../../data/restapi.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  public in=[];
  en:string;
  sessionValue:string="";
  localValue:string="";
  public Em:string;
  public richy:string;
  

constructor(private restApi:RestapiService,private router:Router) { }

onClickChange(){
  console.log(this.declared);
  this.declared.Password="passwd.12";
  this.declared.Type="General";
       this.restApi.sign(this.declared)
        .subscribe(data => console.log("Succeeded, result = " + data), 
        (err)=> console.error("Failed! " + err));
        
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
    this.router.navigateByUrl('/login');
  }
  home(){
    this.router.navigateByUrl('/ahome');
  }
  aging(){
    this.router.navigateByUrl('/aging');
  }
  claims(){
    this.router.navigateByUrl('/claims');
  }
go(){
sessionStorage.setItem("second",this.Em);
this.localValue=sessionStorage.getItem("second");
console.log("Department"+ this.Em);
console.log("Session Dot "+this.localValue);
}
loadData(){
return this.restApi.getData(this.sessionValue)
.subscribe(data=>this.in=data);
}

goTOAssigned(){
this.router.navigateByUrl('/acredit');
}
goPaid(){
this.router.navigateByUrl('/apaid');
}
goToNewInvoice(){
this.router.navigateByUrl('/newinvoice');
}
 goToNewUser(){
this.router.navigateByUrl('/newuser');
}
goToP(){
  this.router.navigateByUrl('/changepassword');
  }

approve(key:string){
return this.restApi.getAp(key)
.subscribe(data=>this.richy=data);
console.log(key);

}


}
