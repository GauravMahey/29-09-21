import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TopbarComponent } from './common/topbar/topbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddbrandComponent } from './brand/addbrand/addbrand.component';
import { ListbrandComponent } from './brand/listbrand/listbrand.component';
import { EditbrandComponent } from './brand/editbrand/editbrand.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './error/error.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AddbrandComponent,
    ListbrandComponent,
    EditbrandComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    AddproductComponent,
    ListproductComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
