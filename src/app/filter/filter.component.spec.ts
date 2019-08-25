import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import {Component, ViewChild} from "@angular/core";
//import {FavoritesComponent} from "../favorites/favorites.component";
import {By} from "@angular/platform-browser";
import {genreType, platformType} from "../app.module";


@Component({
  template:
    `<app-filter  [genres] = "genres"  [platformes]="platformes"
                  (onGenreCheckEm)="onGenreCheck($event)"
                  (onPlatformCheckEm)="onPlatformCheck($event)"
     ></app-filter>`
})



class TestComponent {
  public genres:[genreType] = [{checked:true, genre: 'horror'}];
  public platformes:[platformType] = [{checked: true, platform: "GameBoy"}];


  onGenreCheck(item: Event) {

  }
  onPlatformCheck(item: Event) {
  }


  constructor() {
  }

  @ViewChild(FilterComponent,null)
  filterComponent: FilterComponent;

}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent,FilterComponent ]
    })

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance.filterComponent;
      debugEl = fixture.debugElement.query(By.directive(FilterComponent));
    });



  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
