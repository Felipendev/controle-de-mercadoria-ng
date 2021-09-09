import { ErrorsModule } from './errors/errors.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
