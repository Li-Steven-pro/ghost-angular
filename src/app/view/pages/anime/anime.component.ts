import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemesAnime } from 'src/app/interface/anime-themes';
import { AnimeThemesService } from 'src/app/service/anime-themes/anime-themes.service';

/**
 * A page for media player and
 * displays the details of an anime
 */
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit{
  
  anime!: ThemesAnime;  // List of available themes for the anime
  currentTheme!:number;  // Theme currently playing
  isURLReady = false;   // If anime data is ready
  
  constructor(
    private route: ActivatedRoute,
    private service: AnimeThemesService
  ) {}

  ngOnInit(){
    this.setAnime()
  }

  /* Set member anime data from id passed by route parameter using AnimeThemesService*/
  setAnime(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getAnime(id)
    .then((data) => {
      this.anime = data;
      this.currentTheme = 0;
      this.isURLReady = true;
    }).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  /* Fired when child component themes list (app-themes-vertical-list) sends
     an clickedItemEvent event. The $event parameter (see template) is the 
     selected theme from the themes list.*/
  OnChangeTheme(newTheme:number){
    this.currentTheme = newTheme;
  }
}
