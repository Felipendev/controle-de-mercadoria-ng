import { AuthGuard } from './core/auth.guard';
import { ClienteFormComponent } from './views/home/cliente-form/cliente-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './views/home/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { AuthenticationComponent } from './core/authentication/authentication/authentication.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'new', component: ClienteFormComponent },
      {path: 'edit/:id', component: ClienteFormComponent}
    ],
    canActivate: [AuthGuard]
  },
  { 
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full'},
      { path: 'signin', component: SigninComponent }
    ],
  },
  // { 
  //   path: 'home', 
  //   component: HomeComponent 
  // },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
  { 
    path: '**', 
    redirectTo: 'not-found' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
