import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemesAnime } from 'src/app/interface/anime-themes';
import { AnimeThemesService} from 'src/app/service/anime-themes/anime-themes.service';
import {PageEvent} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listKey = "userList";
  results: Array<ThemesAnime> = Array<ThemesAnime>()
  resultsToShow : Array<ThemesAnime> = Array<ThemesAnime>();
  anime !: ThemesAnime;
  searchParam = ""
  isRequest = false
  provider!: string
  pseudo = ""

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private route: ActivatedRoute, 
    private animeTheme : AnimeThemesService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const provider = String(routeParams.get('provider'))
    const name = String(routeParams.get('name'));
    this.isRequest = true;
    if(localStorage.getItem(this.listKey) != null){
      let value = JSON.parse(localStorage.getItem(this.listKey) || '{}')
      if(provider == value.provider && name == value.name ){
        console.log("set From local storage")
        this.setResults(value.list)
      }
      else{
        this.doRequest(provider, name)
      }
    }else{
      this.doRequest(provider, name)
    }
  }

  doRequest(provider : string, name : string){
    console.log("doRequest");
    if(provider === 'mal'){
      this.makeMalRequest(name)
    }if (provider === 'anilist') {
      this.makeAnilistRequest(name)
    } else {
      this._snackBar.open("The list provider dosn't match with ours", "Understand", {
        duration: 10000,
      });
    }
  }
  onPageChange($event : PageEvent){
    this.resultsToShow = this.results.slice($event.pageIndex*$event.pageSize,$event.pageIndex*$event.pageSize + $event.pageSize)
    console.log(this.resultsToShow)
  }

  makeMalRequest(name : string){
    this.animeTheme.getMal(name)
    .then((data) => {
      this.setResults(data)
      this.savePersistenceList("mal", name)
    }).catch(
      (err) => {
        this._snackBar.open("Didn't found any match in MyAnimeList", "Understand", {
          duration: 10000,
        });
      }
    ).finally(()=> {
      this.isRequest = false;
    })
  }

  makeAnilistRequest(name : string){
    this.animeTheme.getAnilist(name)
      .then((data) => {
        this.setResults(data)
        this.savePersistenceList("anilist", name)
      }).catch(
        (err) => {
          this._snackBar.open("Didn't found any match in Anilist", "Understand", {
            duration: 10000,
          });
        }
      ).finally(()=>{
        this.isRequest = false;
      })
  }

  savePersistenceList(provider : string, name: string){
    const value = {
      name : name,
      provider : provider,
      list : this.results,
    }
    localStorage.setItem(this.listKey, JSON.stringify(value))
  }

  setResults(results : Array<ThemesAnime> ){
    this.results = results;
    this.resultsToShow = this.results.slice(0,this.pageSize)
  }

}
