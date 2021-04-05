import { Component, Input } from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  vgApi!: VgApiService;
  @Input() anime!:ThemesAnime

  constructor() { }

  
  onPlayerReady(api:VgApiService){
    this.vgApi = api;
    this.vgApi.getDefaultMedia().buffer;

    /*this.vgApi.getDefaultMedia().subscriptions.error.subscribe(
      () => {
          // Set the video to the beginning
          this.vgApi.getDefaultMedia().buffer;
      }
    );*/

    this.vgApi.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
          // Set the video to the beginning
          this.vgApi.getDefaultMedia().currentTime = 0;
      }
    );
  }

}
