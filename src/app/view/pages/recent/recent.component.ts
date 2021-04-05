import { Component, OnInit } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  recentList ?: Array<ThemesAnime>
  constructor() { }

  ngOnInit(): void {
    let recents : Array<ThemesAnime> = JSON.parse(localStorage.getItem("recents") || '[]')
    this.recentList = recents
  }

}
