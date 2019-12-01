// ================== Core Modules ======================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// =================== Libraries =========================
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './home/home.component';
import { Component1Component } from './components/component1/component1.component';

//Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ngComponents', component: ComponentsComponent},
  { path: 'ngComponents/:component', component: Component1Component},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComponentsComponent,
    HomeComponent,
    Component1Component,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
