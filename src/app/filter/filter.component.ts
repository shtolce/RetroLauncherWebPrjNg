import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {genreType, platformType} from "../app.module";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit,OnChanges {
  @Input()
    genres:[genreType]= [null];
  @Input()
    platformes:[platformType]= [null];
  @Output()
     onGenreCheckEm = new EventEmitter();
  @Output()
     onPlatformCheckEm = new EventEmitter();

  onGenreCheck(item: Event) {
    let foundItem = this.genres.filter((data)=>{return data.genre == (item.target as HTMLFormElement).id });
    foundItem[0].checked= !foundItem[0].checked;

    this.onGenreCheckEm.emit(this.genres);
  }
  onPlatformCheck(item: Event) {
    let foundItem = this.platformes.filter((data)=>{return data.platform == (item.target as HTMLFormElement).id });
    foundItem[0].checked= !foundItem[0].checked;

    this.onPlatformCheckEm.emit(this.platformes);
  }



  get gameGenres():[genreType] {
    return this.genres;
  }
  get gamePlatformes():[platformType] {
    return this.platformes;
  }

  ngOnChanges() {
  //  console.log(this.genres)


  }
  constructor() { }

  ngOnInit() {
  }

}
