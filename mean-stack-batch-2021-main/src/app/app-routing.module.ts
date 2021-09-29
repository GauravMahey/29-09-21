import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbrandComponent } from './brand/addbrand/addbrand.component';
import { ListbrandComponent } from './brand/listbrand/listbrand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'user/login',pathMatch:'full'},
  
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent}
    ]
  },
  {path:'addbrand',component:AddbrandComponent},
  {path:'listbrand',component:ListbrandComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'listproduct',component:ListproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
