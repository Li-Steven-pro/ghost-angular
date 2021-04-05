import { Component, Input } from '@angular/core';
import { Theme } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.css']
})
export class ThemeCardComponent{
  @Input() theme!:Theme
  @Input() index!:number

  /* Ripple animation config */
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;
  
  constructor() { }
}
