import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesAnime } from 'src/app/interface/anime-themes';
import { AnimeThemesService} from 'src/app/service/anime-themes/anime-themes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  results: Array<ThemesAnime> = Array<ThemesAnime>()
  anime !: ThemesAnime;
  searchParam = "";

  provider = "mal";
  pseudo = "";

  constructor(private route: ActivatedRoute, 
    private animeTheme : AnimeThemesService,
    private router : Router) {
  }

  doSearch(){
    const name = this.searchParam;
    this.animeTheme.searchAnime(name)
    .then((data) => {
      this.results = data
    }).catch(
      (err) => {
        console.log(err)
      }
    )
  }

  searchList(){
    const pseudo = this.pseudo;
    this.router.navigate(['/list/'+this.provider+'/'+pseudo])
  }
}
