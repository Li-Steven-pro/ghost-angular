import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Injectable({
  providedIn: 'root'
})
export class AnimeThemesService {

  baseUrl = "https://animethemes-api.herokuapp.com/api/v1/";
  constructor(private http : HttpClient){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  getAnilist(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "anilist/" + name).toPromise()
  }

  getMal(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "mal/" + name ).toPromise()
  }

  getAnime(id : number){
    return this.http.get<ThemesAnime>(this.baseUrl+ "anime/" + id).toPromise()
  }
  searchAnime(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "search/anime/"+ name).toPromise()
  }
}
