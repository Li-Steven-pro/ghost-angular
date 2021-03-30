import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './view/anime/anime.component';
import { HomeComponent } from './view/home/home.component';
import { AnimeCardComponent } from './view/anime-card/anime-card.component';
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecentComponent } from './view/recent/recent.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    HomeComponent,
    AnimeCardComponent,
    MainMenuComponent,
    RecentComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry){
  }
}
