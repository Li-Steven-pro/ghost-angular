import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interface/menu-item'
import {MENUITEMS} from 'src/app/constants/menu-items.constants';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent{

  menuItemList: MenuItem[];
  constructor() {
    this.menuItemList = MENUITEMS;
   }
}
