import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RepositorySevice } from './repository/repository.sevice';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { InfoComponent } from './info/info.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDialogModule} from '@angular/material/dialog';
import {MDModModule} from './mdmod/mdmod.module'
import {MatNativeDateModule} from '@angular/material/core';

export type gameType = {
  'shortName'    : string,
  'fullName'     : string,
  'platformType' : string,
  'year'         : number,
  'genreName'    : string,
  'imgUrl'       : string,
  'downloadUrl'  : string,
  'annotation'   : string
};
export type platformType = {platform:string,checked:boolean};
export type genreType = {genre:string,checked:boolean};


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    FavoritesComponent,
    SearchComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MDModModule,
    MatNativeDateModule,
  ],
  providers: [RepositorySevice],
  bootstrap: [AppComponent],
  entryComponents: [InfoComponent]
})
export class AppModule {

}
