import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JikanAPIService {
  base_url : String  = "https://api.jikan.moe/v3/";

  constructor(
    private http : HttpClient
  ) { }
  
  getAnimeById(id : number){
    return this.http.get(this.base_url+"anime/"+id).subscribe(data => console.log(data));
  }

  searchAnimeByName(title : String){
    var titleSplited = title.split(" ");
    var titleFormated = titleSplited.join("%20");
    this.http.get(this.base_url + "search/anime?q="+titleFormated+"&page=1").subscribe(data => console.log(data));
  }


}