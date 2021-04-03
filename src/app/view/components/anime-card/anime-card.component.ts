import { Component} from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent{
  animeTitle = 'default title'
  mediaLength = '3:00'
  source = './../../../assets/konosuba.png'
  altText = 'konosuba'

  constructor() { }
}