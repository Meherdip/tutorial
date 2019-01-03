import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileuploderComponent } from './fileuploder/fileuploder.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    FileuploderComponent,
    GallaryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
