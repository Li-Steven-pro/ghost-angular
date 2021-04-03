import { isDefined } from '@angular/compiler/src/util';
import { Component, Input} from '@angular/core';
import { animeCardItem } from 'src/app/interface/anime-card';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent{
  @Input() animeItem: animeCardItem

  constructor() {
    this.animeItem = { 
      title : "[default title]",
      mediaLength : "0:00", 
      imageSource: "./../../../assets/konosuba.png", 
      altText: "default card"
    }
  }
}