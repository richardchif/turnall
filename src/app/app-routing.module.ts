import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LoginaComponent } from './logina/logina.component';
import { ShomeComponent } from './sales/shome/shome.component';
import { AhomeComponent } from './admin/ahome/ahome.component';

import { AssigndComponent } from './assignd/assignd.component';
import{ AssignsuccComponent } from './assignsucc/assignsucc.component'
import { AcreditComponent } from './admin/acredit/acredit.component';
import { ApaidComponent } from './admin/apaid/apaid.component';
import { NewinvoiceComponent } from './admin/newinvoice/newinvoice.component';
import { NewuserComponent} from './admin/newuser/newuser.component';
import { ChangepasswordComponent } from './admin/changepassword/changepassword.component';

import { TrackersComponent } from './trackers/trackers.component';
import { PasscComponent } from './trackers/passc/passc.component';
import { SdebtComponent } from './trackers/sdebt/sdebt.component';
import { ListComponent } from './list/list.component';
import { AgeComponent } from './age/age.component';

import { LoadingaComponent } from './loadinga/loadinga.component';
import { LoadingbComponent } from './loadingb/loadingb.component';
import { LoadingcComponent } from './loadingc/loadingc.component';
import { AgingComponent } from './aging/aging.component';
import { ClaimsComponent } from './claims/claims.component';




const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"logina",component:LoginaComponent},
  {path:"shome", component: ShomeComponent},
  {path:"ahome", component:AhomeComponent},
  {path:"acredit", component:AcreditComponent},
  {path:"apaid", component:ApaidComponent},
  {path:"newinvoice", component:NewinvoiceComponent},
  {path:"newuser",component:NewuserComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  {path:"trackers", component:TrackersComponent},
  {path:"passc", component:PasscComponent},
  {path:"sdebt", component:SdebtComponent},
  {path:"loadinga", component:LoadingaComponent},
  {path:"loadingb", component:LoadingbComponent},
  {path:"loadingc", component:LoadingcComponent},
  {path:"assign", component:AssigndComponent},
  {path:"assignsucc", component:AssignsuccComponent},
  {path:"list",component:ListComponent},
  {path:"age",component:AgeComponent},
  {path:"aging", component:AgingComponent},
  {path:"claims", component:ClaimsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
