import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SearchComponent} from "./search/search.component";
import {FilterComponent} from "./filter/filter.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {ContentComponent} from "./content/content/content.component";
import {RepositorySevice} from "./repository/repository.sevice";
import {Http} from "@angular/http";
import {MatDialog} from "@angular/material";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx"

describe('AppComponent', () => {
  let mockRepositorySevice = {

    getGenres() {

      return Observable.from(['horror','arcade']);
    },

    getPlatformes() {
      let data = this.http.get('https://localhost:44354/api/values/getPlatforms').
      map((response: Response)=>{

        let dataResponse = response.json();
        return dataResponse;
      });
      return ["dendy","GameBoy"];
    },
    getGamesByPage(Filter:{
                     pageNumber: number,
                     itemsPerPage: number,
                     platformes: [string],
                     genres: [string]
                   }
    ) {
      return [{"gameId":1,"name":"10-Yard Fight","nameSecond":"１０ヤードファイト","nameOther":null,"genre":"Спортивная игра","year":1985,"developer":"Nintendo / Irem","annotation":"Симулятор американского футбола. Одна из ранних игр на приставке. Отсюда и скупость графики и звука. Но играть довольно интересно, особенно вдвоем.","platform":{"platformId":1,"platformName":"Dendy/Денди (NES)","alias":"nes"},"gameLinks":[{"linkId":42255,"url":"nes/pics/10-Yard_Fight0.jpg","typeUrl":2,"urlRemote":null},{"linkId":42256,"url":"nes/pics/10-Yard_Fight1.jpg","typeUrl":3,"urlRemote":null},{"linkId":42254,"url":"nes/roms/10-Yard_Fight.7z","typeUrl":1,"urlRemote":null}],"imgUrl":"https://downloader.disk.yandex.ru/disk/88313fc048e28cd665aec4e884ccd1f3b1b8e9b58e1b5cccf160a281a8671fb2/5d62c5fa/8Vp_5g5_Jsx18Bw41ue6ud8yo3sEqmrB2Jwi5hM0jYLEwklagUElP6A95ZPv52ysGcb9eMcUFkXoutxI8cphMg%3D%3D?uid=111923586&filename=10-Yard_Fight0.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fpng&owner_uid=111923586&fsize=2870&hid=f88a2f4b78c8efb1e7b51cef2adccb3a&media_type=image&tknv=v2&etag=08d3c0d5fca4fe468010cc89ec218516","downloadUrl":"https://downloader.disk.yandex.ru/disk/72233f16a118e23944ba5664e077bc5128510920591bce73ae9e286c304da472/5d62c5fa/PWTM4AQUG5jhnwdkuJG0csQjuDqA7mWyl3xmLWDoq8MURtJ4RriqIyjerKGnm-uSpsiLG_iGtXvIPOahJg4pzA%3D%3D?uid=111923586&filename=10-Yard_Fight.7z&disposition=attachment&hash=&limit=0&content_type=application%2Fx-7z-compressed&owner_uid=111923586&fsize=19114&hid=5e80fe896b2160b25d5ae6ca0bbf484e&media_type=compressed&tknv=v2&etag=1ede7a69d4d2942f89cd9652706c3aab"}];
    },

    getFavorites() {
      return   [{shortName: 'Vasya'}];
    }

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FavoritesComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        FilterComponent,
        ContentComponent
      ],
      providers: [{
        provide: RepositorySevice,  useValue:mockRepositorySevice
      },
        {provide:Http},
        {provide:MatDialog}

      ]

    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render app-favorites', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('app-favorites'))).toBeTruthy();
  });
});
