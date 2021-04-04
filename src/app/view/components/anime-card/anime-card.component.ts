import { Component, Input} from '@angular/core';
import { ThemesAnime} from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent{
  @Input()
  animeItem!: ThemesAnime;

  constructor() {
  }
}