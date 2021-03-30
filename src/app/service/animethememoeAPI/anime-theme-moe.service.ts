import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { ThemesMoeAnime } from 'src/app/interface/theme-moe';
@Injectable({
  providedIn: 'root'
})
export class AnimeThemeMoeService {

  constructor(private http : HttpClient){}

  getMal(name : string){
    return this.http.get<Array<ThemesMoeAnime>>("https://themes.moe/api/mal/"+name)
  }

  getAnilist(name : string){
    return this.http.get<Array<ThemesMoeAnime>>("https://themes.moe/api/anilist/"+name)
  }

  getYear(year : string){
    return this.http.get<Array<ThemesMoeAnime>>("https://themes.moe/api/seasons/"+year)
  }
}
