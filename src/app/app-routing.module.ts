import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { BeautyComponent } from './admin/beauty/beauty.component';
import { FashionComponent } from './admin/fashion/fashion.component';
import { LifestyleComponent } from './admin/lifestyle/lifestyle.component';
import { PostingComponent } from './admin/posting/posting.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ReadmoreComponent } from './component/readmore/readmore.component';
import { SignupComponent } from './component/signup/signup.component';
import { IsloggedGuard } from './guard/islogged.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { UprofileComponent } from './user/uprofile/uprofile.component';
import { UsersComponent } from './user/users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'beauty',component:BeautyComponent},
  // {path:'fashion',component:FashionComponent},
  // {path:'lifestyle',component:LifestyleComponent},
   {path:'read',component:ReadmoreComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'admin/user',component:UsersComponent},
    {path:'',component:PostingComponent},
    {path:'admin/post',component:PostingComponent},
  ]
},
{path:'dash/:index', component:DashboardComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'beauty/:index',component:BeautyComponent},
  {path:'fashion/:index',component:FashionComponent},
  {path:'lifestyle/:index',component:LifestyleComponent},
  {path:'uprofile/:index',component:UprofileComponent},

],
canActivate : [IsloggedGuard]
},
  {path:'sign', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
