import { Routes, RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },  
          {path: 'progress', component: ProgressComponent,  data: {titulo: 'ProgressBar'} },
          {path: 'grafica1', component: Grafica1Component,  data: {titulo: 'Gráfica'} },
          {path: 'acount-settings', component: AcountSettingsComponent,  data: {titulo: 'Ajustes de cuenta'} },
          {path: 'promises', component: PromisesComponent,  data: {titulo: 'Promesas'} },
          {path: 'rxjs', component: RxjsComponent,  data: {titulo: 'RxJs'} }
          //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
      },

    //{path: 'path/:routeParam', component: MyComponent },
    //{path: 'staticPath', component: ...},
    //{path: '**', component: ...},
    //{path: 'oldPath¿, redirectTo: '/staticPath' },
    //{path: ..., component: ..., data: {message: 'Custom'}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pagesRoutingModule {}
