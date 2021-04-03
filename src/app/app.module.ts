import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Material modules */
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio'

/* App components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import { HomeComponent } from './view/pages/home/home.component';
import { AnimeComponent } from './view/pages/anime/anime.component';
import { AnimeCardComponent } from './view/components/anime-card/anime-card.component';
import { RecentComponent } from './view/pages/recent/recent.component';
import { HorizontalListComponent } from './view/components/horizontal-list/horizontal-list.component';
import { SearchComponent} from './view/pages/search/search.component'; 
@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    HomeComponent,
    AnimeCardComponent,
    SearchComponent,
    MainMenuComponent,
    RecentComponent,
    HorizontalListComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(){
  }
}
