import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/pages/home/home.component';
import { ListComponent } from './view/pages/list/list.component';
import { SearchComponent } from './view/pages/search/search.component';
import { AnimeComponent } from "./view/pages/anime/anime.component";
import { RecentComponent } from './view/pages/recent/recent.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'list/:provider/:name', component: ListComponent},
  {path: 'anime/:id', component : AnimeComponent},
  {path: 'recent', component: RecentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
