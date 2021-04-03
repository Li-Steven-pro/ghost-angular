import { Component } from '@angular/core';
import {ANIMELISTTEST } from 'src/app/constants/mock-anime-list';
import { animeCardItem } from 'src/app/interface/anime-card';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css']
})
export class HorizontalListComponent {
  animeList: animeCardItem[];
  
  constructor() { 
    this.animeList = ANIMELISTTEST;
  }

}
