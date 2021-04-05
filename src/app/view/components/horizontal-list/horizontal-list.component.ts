import { Component, Input } from '@angular/core';
import { mockAnimeList } from 'src/app/constants/mock-anime-list';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css']
})
export class HorizontalListComponent {
  @Input()
  animeList: Array<ThemesAnime>;
  
  constructor() { 
    this.animeList = mockAnimeList;
  }

}
