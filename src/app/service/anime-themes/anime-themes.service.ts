import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Injectable({
  providedIn: 'root'
})
export class AnimeThemesService {

  baseUrl = "https://animethemes-api.herokuapp.com/api/v1/";
  
  constructor(private http : HttpClient, private headers : HttpHeaders ){
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  getAnilist(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "anilist/" + name, {"headers" : this.headers})
  }

  getMal(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "mal/" + name , {"headers" : this.headers})
  }

  getAnime(id : number){
    return this.http.get<ThemesAnime>(this.baseUrl+ "anime/" + id, {"headers" : this.headers})
  }
  searchAnime(name : string){
    return this.http.get<Array<ThemesAnime>>(this.baseUrl+ "search/anime/"+ name, {"headers" : this.headers})
  }
}
