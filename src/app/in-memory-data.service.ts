import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombastic' },
      { id: 14, name: 'Superman' },
      { id: 15, name: 'Magneto' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'DynamateGirl' },
      { id: 18, name: 'MinuteMan' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado'},
      { id: 21, name: 'Seth Solar'},
      { id: 22, name: 'Salomon Solar'},
      { id: 23, name: 'Thanatos'},
      { id: 24, name: 'Minuteman'},
      { id: 25, name: 'PortalGirl'},
      { id: 26, name: 'Seismic'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
