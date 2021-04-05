import { Component, Input, OnInit } from '@angular/core';
import { Theme, ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-anime-info-card',
  templateUrl: './anime-info-card.component.html',
  styleUrls: ['./anime-info-card.component.css']
})
export class AnimeInfoCardComponent{
  @Input() animeInfo!: ThemesAnime;
  @Input() currentTheme!: number;
  private themeTitle: String;

  constructor() { 
    this.themeTitle = "[ DEFAULT_TITLE]"
  }

  getCurrentTheme(){
    return this.animeInfo.themes[this.currentTheme];
  }

  /* Returns the theme's title concatenated with the author name if available */
  getThemeTitle(){
    this.themeTitle = this.getCurrentTheme().title
    let artist = this.getCurrentTheme().artist
    if(artist != null && artist !==""){
      this.themeTitle += " - " + artist;
    }
    return this.themeTitle;
  }


}
