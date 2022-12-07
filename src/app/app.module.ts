import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ServiceComponent } from './service/service.component'

var myRoutes:Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"service",component:ServiceComponent}
];

var myRoutes2 = RouterModule.forRoot(myRoutes);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    myRoutes2
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
