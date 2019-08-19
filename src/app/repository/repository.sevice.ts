import {Http, Response} from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class RepositorySevice {
  constructor(private http: Http) {


  }
  private games = [];
  private genres = [];
  private platformes = [];
  private favoritesArray = [];

  getGenres() {
    let data = this.http.get('https://localhost:44354/api/values/getGenres').
    map((response: Response)=>{

      let dataResponse = response.json();
      return dataResponse;
    });
    return data;
  }

  getPlatformes() {
    let data = this.http.get('https://localhost:44354/api/values/getPlatforms').
    map((response: Response)=>{

      let dataResponse = response.json();
      return dataResponse;
    });
    return data;
  }


  getGames() {
     let data = this.http.get('https://localhost:44354/api/values/getAll').
     map((response: Response)=>{

       let dataResponse = response.json();

         dataResponse = dataResponse.map(dat =>{return {
           'shortName'    : dat.nameSecond?dat.nameSecond:'N/A',
           'fullName'     : dat.name,
           'platformType' : dat.platform.platformName,
           'year'         : dat.year,
           'genreName'    : dat.genre,
           'imgUrl'       : dat.imgUrl
         }
       });
      return dataResponse;
    });
     return data;
  }

  getFavorites() {
    this.favoritesArray.push({
      shortName:     'Vasya'
    });
    return this.favoritesArray;

  }



}
