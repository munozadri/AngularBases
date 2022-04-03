import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//Modulo importado compartido
import { SheredModule } from '../shared/shered.module';
//import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AcountSettingsComponent,
    PromisesComponent,
    RxjsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AcountSettingsComponent    
  ],
  imports: [
    CommonModule,
    SheredModule,
    //AppRoutingModule
    RouterModule,
    FormsModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
