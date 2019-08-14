import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsPerPage = 3;
  games = [];
  favoritesArray = []
  currentPage: number = 1;
  mappedGenresArr;
  mappedPlatformesArr;
  searchText = '';
  ngOnInit() {
    this.favoritesArray.push({
      shortName:     'Vasya'
    });

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
    this.getPlatformes();
    this.getGenres();
  };
  changePage(numP: number) {
    this.currentPage = numP;
  }
  get gamesArr():any {
    let pageIndex = (this.currentPage-1) * this.itemsPerPage
    let gameFilterArr;
    gameFilterArr = this.games.filter((data)=>{
      let tempGenreArr = this.mappedGenresArr.filter((el)=>el.checked).map((item=>item.genre));
      return tempGenreArr.includes(data.genreName);
    });
    gameFilterArr = gameFilterArr.filter((data)=>{
      let tempPlatformesArr = this.mappedPlatformesArr.filter((el)=>el.checked).map((item=>item.platform));
      return tempPlatformesArr.includes(data.platformType);
    });

    gameFilterArr = gameFilterArr.filter((data)=>{
      return data.shortName.indexOf(this.searchText) != -1;


    });

    return gameFilterArr.slice(pageIndex,pageIndex + this.itemsPerPage);

  }
  getGenres() {
    this.mappedGenresArr = this.games.map((data)=>{
      return {
        'genre':data.genreName,
        'checked':true
      }
    });
    this.mappedGenresArr = this.mappedGenresArr.filter((item,pos)=>{
      return this.mappedGenresArr.map((data)=>data.genre).indexOf(item.genre) == pos
    });
  }

  getPlatformes() {
    this.mappedPlatformesArr = this.games.map((data)=>{
      return {
        'platform':data.platformType,
        'checked':true
      }
    });
    this.mappedPlatformesArr =this.mappedPlatformesArr.filter((item,pos)=>{
      return this.mappedPlatformesArr.map((data)=>data.platform).indexOf(item.platform) == pos
    });
  }

  get genres() {
    return this.mappedGenresArr;
  }

  get platformes() {
    return this.mappedPlatformesArr;
  }

  onGenreCheck(target) {
    this.mappedGenresArr= target;

  }
  onPlatformCheck(target) {
    this.mappedPlatformesArr= target;


  }

  search(text) {
    this.searchText = text;
  }



}
