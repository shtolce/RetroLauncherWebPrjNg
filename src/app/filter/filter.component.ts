import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit,OnChanges {
  @Input()
    genres= [];
  @Input()
    platformes= [];
  @Output()
     onGenreCheckEm = new EventEmitter();
  @Output()
     onPlatformCheckEm = new EventEmitter();

  onGenreCheck(item: any) {
    let foundItem = this.genres.filter((data)=>{return data.genre == item.target.id });
    foundItem[0].checked= !foundItem[0].checked;

    this.onGenreCheckEm.emit(this.genres);
  }
  onPlatformCheck(item: any) {
    let foundItem = this.platformes.filter((data)=>{return data.platform == item.target.id });
    foundItem[0].checked= !foundItem[0].checked;

    this.onPlatformCheckEm.emit(this.platformes);
  }



  get gameGenres():any {
    return this.genres;
  }
  get gamePlatformes():any {
    return this.platformes;
  }

  ngOnChanges() {
  //  console.log(this.genres)


  }
  constructor() { }

  ngOnInit() {
  }

}
