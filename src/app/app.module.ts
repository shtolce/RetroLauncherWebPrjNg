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

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    FavoritesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [RepositorySevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
