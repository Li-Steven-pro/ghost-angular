import { Component } from '@angular/core';
/*import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from './Contants/Icons';
import { Icon } from './interface/MenuItem';*/
import { JikanAPIService } from './service/jikanAPI/jikan-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ghost-angular';
  //icons: Icon[];
  
  constructor (private jikan_api : JikanAPIService, 
    /*private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer*/
    ){
    //jikan_api.random().subscribe((data: any) => console.log(data))
    /*this.icons = ICONS;
    for(let icon of this.icons){
      this.matIconRegistry.addSvgIconLiteral(
        icon.label,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    }*/
  }
}
