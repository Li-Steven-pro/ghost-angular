import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemesAnime } from 'src/app/interface/anime-themes';
import { AnimeThemesService} from 'src/app/service/anime-themes/anime-themes.service';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  results: Array<ThemesAnime> = Array<ThemesAnime>()
  resultsToShow : Array<ThemesAnime> = Array<ThemesAnime>();
  anime !: ThemesAnime;
  searchParam = "";
  isRequest = false;
  provider = "mal";
  pseudo = "";

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private route: ActivatedRoute, private animeTheme : AnimeThemesService ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const provider = String(routeParams.get('provider'))
    const name = String(routeParams.get('name'));
    this.isRequest = true;
    if(provider === 'mal'){
      this.animeTheme.getMal(name)
      .then((data) => {
        console.log(data)
        this.results = data
        this.resultsToShow = this.results.slice(0,this.pageSize)
      }).catch(
        (err) => {
          console.log(err)
        }
      ).finally(()=> {
        this.isRequest = false;
      })
    }if (provider === 'anilist') {
      this.animeTheme.getAnilist(name)
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
    } else {
      console.log("error provider")
    }
  }

  onPageChange($event : PageEvent){
    this.resultsToShow = this.results.slice($event.pageIndex*$event.pageSize,$event.pageIndex*$event.pageSize + $event.pageSize)
    console.log(this.resultsToShow)
  }

}
