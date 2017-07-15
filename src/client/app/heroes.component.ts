import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  addingHero = false;
  heroes: any = [];
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  cancel(): void {
    this.addingHero = false;
    this.selectedHero = null;
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroesService.deleteHero(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  enableAddMode(): void {
    this.addingHero = true;
    this.selectedHero = new Hero();
  }

  getHeroes() {
    return this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.addingHero = false;
    this.selectedHero = hero;
  }

  save(): void {
    if (this.addingHero) {
      this.heroesService.addHero(this.selectedHero).subscribe(hero => {
        this.addingHero = false;
        this.selectedHero = null;
        this.heroes.push(hero);
      });
    } else {
      this.heroesService.updateHero(this.selectedHero).subscribe(hero => {
        this.addingHero = false;
        this.selectedHero = null;
      });
    }
  }
}
