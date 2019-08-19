import {Component, OnInit} from '@angular/core';
import {RepositorySevice} from "./repository/repository.sevice";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsPerPage = 5;
  favoritesArray = [];
  currentPage: number = 1;
  mappedGenresArr;
  mappedPlatformesArr;
  searchText = '';
  games = [];
  constructor(private repo:RepositorySevice) {

  }

  ngOnInit() {
    //this.games = this.repo.getGames();
    this.repo.getGenres().subscribe((res)=>{
      this.mappedGenresArr = res.map((data)=>{
        return {
          'genre':data,
          'checked':true
        }
      });
    });
    this.repo.getPlatformes().subscribe((res)=>{
      this.mappedPlatformesArr = res.map((data)=>{
        return {
          'platform':data,
          'checked':true
        }
      });;
    });


    this.repo.getGames().subscribe((res)=>{
      this.games = res;
      //this.getPlatformes();
      //this.getGenres();
    });

    this.favoritesArray = this.repo.getFavorites();

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
