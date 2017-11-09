import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.class';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {}

  ngOnInit() {}
}
