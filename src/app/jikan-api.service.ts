import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JikanAPIService {

  constructor(
    private http : HttpClient
  ) { }
  random(){
    return this.http.get("https://api.jikan.moe/v3/anime/37105");
  }
}
