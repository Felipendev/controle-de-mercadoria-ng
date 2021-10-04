import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './views/home/signin/signin.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: SigninComponent
  },
  { 
    path: 'signin', 
    component: SigninComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
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
