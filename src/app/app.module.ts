import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RecentsearchComponent } from './components/recentsearch/recentsearch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveAllComponent } from './remove-all/remove-all.component';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { ClearAllComponent } from './clear-all/clear-all.component';



@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    HomeComponent,
    MainComponent,
    RecentsearchComponent,
    RemoveAllComponent,
    ClearAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
