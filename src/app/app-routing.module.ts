import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { ListComponent } from './view/list/list.component';
import { SearchComponent } from './view/search/search.component';
import { AnimeComponent } from "./view/anime/anime.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'list/:provider/:name', component: ListComponent},
  {path: 'anime/:id', component : AnimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
