import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { ThemesAnime, ThemesMoeAnime } from 'src/app/interface/ThemesMoe';
@Injectable({
  providedIn: 'root'
})
export class AnimeThemeMoeService {

  constructor(private http : HttpClient){}

  getUAnilist(name : String){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    return this.http.get<ThemesAnime[]>("https://animethemes-api.herokuapp.com/api/v1/anilist/" +name, { 'headers': headers })
  }

  getMal(name : string){
    return this.http.get<Array<ThemesMoeAnime>>("https://themes.moe/api/mal/"+name)
  }

  getAnilist(name : string){
    return this.http.get<Array<ThemesMoeAnime>>("https://themes.moe/api/anilist/"+name)
  }

  getSeason(year : string, season : string){
    return this.http.get<Array<ThemesMoeAnime>>("https://themes.moe/api/seasons/"+year)
  }
}
