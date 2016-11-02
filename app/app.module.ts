import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";
import { LoginComponent } from "./components/pages/login.component";
import { HomeComponent } from "./components/pages/home.component";
import { AboutComponent } from "./components/pages/about.component";

import  { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
    ])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
