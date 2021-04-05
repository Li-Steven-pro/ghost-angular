import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Theme } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-themes-vertical-list',
  templateUrl: './themes-vertical-list.component.html',
  styleUrls: ['./themes-vertical-list.component.css']
})
export class ThemesVerticalListComponent{
  @Input() themeList!:Theme[]
  @Output() clickedItemEvent = new EventEmitter<Theme>();
  constructor() { }

  onClick(theme:Theme){
    this.clickedItemEvent.emit(theme);
  }
}

