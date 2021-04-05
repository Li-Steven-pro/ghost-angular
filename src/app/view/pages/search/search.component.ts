import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesAnime } from 'src/app/interface/anime-themes';
import { AnimeThemesService} from 'src/app/service/anime-themes/anime-themes.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  results: Array<ThemesAnime> = Array<ThemesAnime>()
  resultsToShow : Array<ThemesAnime> = Array<ThemesAnime>();
  anime !: ThemesAnime;
  searchParam = "";

  isRequest= false;

  provider = "mal";
  pseudo = "";

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private route: ActivatedRoute, 
    private animeThemeService : AnimeThemesService,
    private router : Router) {
  }

  doSearch(){
    this.isRequest = true;
    const name = this.searchParam;
    this.animeThemeService.searchAnime(name)
    .then((data) => {
      console.log(data)
      this.results = data
      this.resultsToShow = this.results.slice(0,this.pageSize)
      
    }).catch(
      (err) => {
        console.log(err)
      }
    ).finally(()=>{
      this.isRequest = false;
    })
  }

  searchList(){
    const pseudo = this.pseudo;
    this.router.navigate(['/list/'+this.provider+'/'+pseudo])
  }

  onPageChange($event : PageEvent){
    this.resultsToShow = this.results.slice($event.pageIndex*$event.pageSize,$event.pageIndex*$event.pageSize + $event.pageSize)
    console.log(this.resultsToShow)
  }
}
