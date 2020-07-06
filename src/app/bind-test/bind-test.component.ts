import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HEROES } from '../heroes'

@Component({
  selector: 'app-bind-test',
  templateUrl: './bind-test.component.html',
  styleUrls: ['./bind-test.component.css']
})


export class BindTestComponent implements OnInit {

  heroes: any[] = [];
  canFly = true;
  power = 5;
  factor = 1;
  title = 'Flying Heroes (pure pipe)';
  mutate = true;
  
  constructor() { this.reset(); }
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canFly: this.canFly };
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }


}
