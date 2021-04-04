import { isDefined } from '@angular/compiler/src/util';
import { Component, Input} from '@angular/core';
import { animeCardItem } from 'src/app/interface/anime-card';
import { ThemesAnime} from 'src/app/interface/anime-themes';

/**
 * An anime cart
 */
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