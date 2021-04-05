import { Component, Input } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css']
})
export class HorizontalListComponent {
  @Input() animeList: ThemesAnime[];
  
  constructor() { 
    this.animeList = [];
  }
}
