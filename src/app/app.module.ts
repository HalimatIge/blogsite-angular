import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReadmoreComponent } from './component/readmore/readmore.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BeautyComponent } from './admin/beauty/beauty.component';
import { FashionComponent } from './admin/fashion/fashion.component';
import { LifestyleComponent } from './admin/lifestyle/lifestyle.component';
import { PostingComponent } from './admin/posting/posting.component';
import { UsersComponent } from './user/users/users.component';
import { SavedComponent } from './user/saved/saved.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { UprofileComponent } from './user/uprofile/uprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    ReadmoreComponent,
    HomeComponent,
    NotfoundComponent,
    AdminComponent,
    BeautyComponent,
    FashionComponent,
    LifestyleComponent,
    PostingComponent,
    UsersComponent,
    SavedComponent,
    DashboardComponent,
    UprofileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
    ,MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
