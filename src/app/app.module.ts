import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ErrorsModule } from './errors/errors.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ErrorsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
