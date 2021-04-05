import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Injectable({
  providedIn: 'root'
})
export class AnimeThemesService {

  baseUrl = "https://animethemes-api.herokuapp.com/api/v1/";
  private headers : HttpHeaders;
  
  constructor(private http : HttpClient){
    this.headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json')
    .append('Access-Control-Allow-Origin', '*');
  }

  getAnilist(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "anilist/" + name, {headers : this.headers}).toPromise()
  }

  getMal(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "mal/" + name,{headers : this.headers}).toPromise()
  }

  getAnime(id : number){
    return this.http.get<ThemesAnime>(this.baseUrl+ "anime/" + id, {headers : this.headers}).toPromise()
  }
  searchAnime(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "search/anime/"+ name, {headers : this.headers}).toPromise()
  }
}
