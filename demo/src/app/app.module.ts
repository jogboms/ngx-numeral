import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NumeralModule } from 'ngx-numeral';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumeralModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
