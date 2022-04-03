import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { pagesRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [  
  
  //a modo de documentación
  // path: 'dashboard' PagesRoutingModule
  // path: 'login' AuthRoutingModule
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //path de rutas por defecto
  {path: '**', component: NopagefoundComponent},  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    pagesRoutingModule,
    authRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
