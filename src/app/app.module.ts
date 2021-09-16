import { ClientesListComponent } from './views/home/clientes-list/clientes-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { HomeModule } from './views/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    HttpClientModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
