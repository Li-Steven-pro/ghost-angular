import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const provider = String(routeParams.get('provider'))
    const name = String(routeParams.get('name'));
    console.log('provider : ' + provider + ', name : '+name)
  }

}
