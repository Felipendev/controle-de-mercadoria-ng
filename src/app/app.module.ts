import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './views/home/home.module';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    LocalDateTimePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
