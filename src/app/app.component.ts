import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsPerPage = 3;
  games = [];
  currentPage: number = 1;

  ngOnInit() {
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
      shortName:     'Igor Zaebal',
      fullName:      'Igor Zaebal Legacy.',
      platformType:  'Dendy',
      year:          2018,
      genreName:     'Advanture'
    })
  };
  changePage(numP: number) {
    this.currentPage = numP;
  }
  get gamesArr():any {
    let pageIndex = (this.currentPage-1) * this.itemsPerPage
    return this.games.slice(pageIndex,pageIndex + this.itemsPerPage);
  }

}
