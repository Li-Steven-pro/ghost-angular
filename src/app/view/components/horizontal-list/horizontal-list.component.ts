import { Component } from '@angular/core';
import {ANIMELISTTEST } from 'src/app/constants/mock-anime-list';
import { animeCardItem } from 'src/app/interface/anime-card';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css']
})
export class HorizontalListComponent {
  animeList: ThemesAnime[];
  
  constructor() { 
    this.animeList = [];
  }

}
