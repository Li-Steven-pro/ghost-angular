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
  
  anime!: ThemesAnime;
  isURLReady = false;
  
  constructor(
    private route: ActivatedRoute,
    private service: AnimeThemesService
  ) {}

  ngOnInit(){
    this.getAnime()
  }

  getAnime(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getAnime(id)
    .then((data) => {
      console.log("Title promise:", data.themes[0].mirrors[0].mirror);
      this.anime = data;
      this.isURLReady = true;
    }).catch(
      (err) => {
        console.log(err);
      }
    );
  }
}
