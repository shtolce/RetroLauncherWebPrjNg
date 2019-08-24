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
  mappedGenresArrForFilter;
  mappedPlatformesArrForFilter;

  searchText = '';
  games = [];
  constructor(private repo:RepositorySevice) {

  }


  changePage(numP: number) {
    this.currentPage = numP;

  }


  ngOnInit() {

    this.repo.getGenres().subscribe((res)=>{
      this.mappedGenresArrForFilter = res;
      this.mappedGenresArr = res.map((data)=>{
        return {
          'genre':data,
          'checked':true
        }
      });

      this.repo.getPlatformes().subscribe((res)=>{
        this.mappedPlatformesArrForFilter = res;

        this.mappedPlatformesArr = res.map((data)=>{
          return {
            'platform':data,
            'checked':true
          }
        });

        //this.changePage(1);

      });


    });

    this.fillGamesAsync();


    this.favoritesArray = this.repo.getFavorites();

  };

  arryProcess(body) {

  let pr =new Promise( (res_,rej_) => {
      this.repo.getGamesByPage(body).subscribe((res) => {
        this.games = this.games.concat(res);
        body.pageNumber++;
        res_(body);

      });

  });
  pr.then((body) => this.arryProcess(body));

    return pr;
  }

  async fillGamesAsync() {
    let body = {
      pageNumber : this.currentPage,
      itemsPerPage: this.itemsPerPage,
      platformes: this.mappedPlatformesArrForFilter,
      genres: this.mappedGenresArrForFilter
    };

    this.arryProcess(body).then((body) => this.arryProcess(body) );


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
      return data.fullName.indexOf(this.searchText) != -1;


    });

    return gameFilterArr.slice(pageIndex,pageIndex + this.itemsPerPage);
    //return gameFilterArr;
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
