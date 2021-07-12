import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SalesComponent } from './sales/sales.component';
import { TrackersComponent } from './trackers/trackers.component';
import { ShomeComponent } from './sales/shome/shome.component';
import { SpasswordComponent } from './sales/spassword/spassword.component';
import { CreditComponent } from './sales/credit/credit.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { AcreditComponent } from './admin/acredit/acredit.component';
import { ApaidComponent } from './admin/apaid/apaid.component';
import { NewinvoiceComponent } from './admin/newinvoice/newinvoice.component';
import { ChangepasswordComponent } from './admin/changepassword/changepassword.component';
import { NewuserComponent } from './admin/newuser/newuser.component';
import { SdebtComponent } from './trackers/sdebt/sdebt.component';
import { PasscComponent } from './trackers/passc/passc.component';
import { LoadingaComponent } from './loadinga/loadinga.component';
import { LoadingbComponent } from './loadingb/loadingb.component';
import { LoadingcComponent } from './loadingc/loadingc.component';
import { LoginaComponent } from './logina/logina.component';
import { AssigndComponent } from './assignd/assignd.component';
import { AssignsuccComponent } from './assignsucc/assignsucc.component';
import { ListComponent } from './list/list.component';
import { AgeComponent } from './age/age.component';
import { AgingComponent } from './aging/aging.component';
import { ClaimsComponent } from './claims/claims.component';
//import { ToastModule } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SalesComponent,
    TrackersComponent,
    ShomeComponent,
    SpasswordComponent,
    CreditComponent,
    LoginComponent,
    AhomeComponent,
    AcreditComponent,
    ApaidComponent,
    NewinvoiceComponent,
    ChangepasswordComponent,
    NewuserComponent,
    SdebtComponent,
    PasscComponent,
    LoadingaComponent,
    LoadingbComponent,
    LoadingcComponent,
    LoginaComponent,
    AssigndComponent,
    AssignsuccComponent,
    ListComponent,
    AgeComponent,
    AgingComponent,
    ClaimsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //ToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
