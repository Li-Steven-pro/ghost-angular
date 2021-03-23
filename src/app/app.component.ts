import { Component } from '@angular/core';
import { JikanAPIService } from './jikan-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ghost-angular';

  constructor (private jikan_api : JikanAPIService){
    jikan_api.random().subscribe(data => console.log(data))
  }


}
