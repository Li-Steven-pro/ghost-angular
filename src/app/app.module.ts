import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './view/anime/anime.component';
import { HomeComponent } from './view/home/home.component';
import { AnimeCardComponent } from './view/components/anime-card/anime-card.component';
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecentComponent } from './view/recent/recent.component';
import { HorizontalListComponent } from './view/components/horizontal-list/horizontal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    HomeComponent,
    AnimeCardComponent,
    MainMenuComponent,
    RecentComponent,
    HorizontalListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry){
  }
}
