import { Component, Input } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

/**
 * A page for media player and
 * displays the details of an anime
 */
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent{
  @Input() anime!: ThemesAnime;
  
  constructor() { }

}
