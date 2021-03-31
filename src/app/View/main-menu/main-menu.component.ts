import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interface/menu-item'
import {MENUITEMS} from 'src/app/constants/menu-items';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItemList: MenuItem[];
  constructor() {
    this.menuItemList = MENUITEMS;
   }

  ngOnInit(): void {
  }

}
