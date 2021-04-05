import { Component, Input, OnInit } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-anime-info-card',
  templateUrl: './anime-info-card.component.html',
  styleUrls: ['./anime-info-card.component.css']
})
export class AnimeInfoCardComponent{
  @Input() animeInfo!: ThemesAnime;

  constructor() { }
}
