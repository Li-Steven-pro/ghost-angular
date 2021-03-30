import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interface/MenuItem'
import {MENUITEMS} from 'src/app/Contants/Menu-items';

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
