import {Http} from '@angular/http';
import {Injectable} from "@angular/core";


@Injectable()
export class RepositorySevice {
  constructor(private http: Http) {


  }
  private games = [];
  private favoritesArray = [];
  getGames() {
    //return this.http.get('');
    this.games.push({
      shortName:     'Vasya',
      fullName:      'Poniy Vasya',
      platformType:  'Dendy',
      year:          1989,
      genreName:     'RPG'
    });
    this.games.push({
      shortName:     'Terminator2',
      fullName:      'Terminator2 Jujment day frfrfrfrfrfrfrfrfrfr',
      platformType:  'Sega',
      year:          1989,
      genreName:     'Shooter'
    })
    this.games.push({
      shortName:     'Mario',
      fullName:      'Super Mario Bros.',
      platformType:  'Dendy',
      year:          1991,
      genreName:     'Arcade'
    })
    this.games.push({
      shortName:     'MarioII',
      fullName:      'Super Mario Bros.II',
      platformType:  'PS4',
      year:          1991,
      genreName:     'Arcade'
    })
    this.games.push({
      shortName:     'Igor Zaebal',
      fullName:      'Igor Zaebal Legacy.',
      platformType:  'Dendy',
      year:          2018,
      genreName:     'Advanture'
    })
    return this.games;

  }
  getFavorites() {
    this.favoritesArray.push({
      shortName:     'Vasya'
    });
    return this.favoritesArray;

  }



}
