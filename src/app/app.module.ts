import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './view/anime/anime.component';
import { HomeComponent } from './view/home/home.component';
import { AnimeCardComponent } from './component/anime-card/anime-card.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecentComponent } from './view/recent/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    HomeComponent,
    AnimeCardComponent,
    MainMenuComponent,
    RecentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry){
  }
}
