import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  template: `
  <div>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <button class="delete-button" (click)="deleteHero(hero)">Delete</button>
        <div class="hero-element">
          <div class="badge">{{hero.id}}</div>
          <div class="name">{{hero.name}}</div>
          <div class="saying">{{hero.saying}}</div>
        </div>
      </li>
    </ul>
    <div class="editarea">
      <button (click)="enableAddMode()">Add New Hero</button>
      <div *ngIf="selectedHero">
        <div class="editfields">
          <div>
            <label>id: </label>
            <input [(ngModel)]="selectedHero.id" placeholder="id" *ngIf="addingHero" />
            <label *ngIf="!addingHero" class="value">{{selectedHero.id}}</label>
          </div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name" />
          </div>
          <div>
            <label>saying: </label>
            <input [(ngModel)]="selectedHero.saying" placeholder="saying" />
          </div>
        </div>
        <button (click)="cancel()">Cancel</button>
        <button (click)="save()">Save</button>
      </div>
    </div>
  </div>
  `
})
export class HeroesComponent implements OnInit {
  addingHero = false;
  heroes: any = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  cancel() {
    this.addingHero = false;
    this.selectedHero = null;
  }

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  enableAddMode() {
    this.addingHero = true;
    this.selectedHero = new Hero();
  }

  getHeroes() {
    return this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero) {
    this.addingHero = false;
    this.selectedHero = hero;
  }

  save() {
    if (this.addingHero) {
      this.heroService.addHero(this.selectedHero).subscribe(hero => {
        this.addingHero = false;
        this.selectedHero = null;
        this.heroes.push(hero);
      });
    } else {
      this.heroService.updateHero(this.selectedHero).subscribe(hero => {
        this.addingHero = false;
        this.selectedHero = null;
      });
    }
  }
}
