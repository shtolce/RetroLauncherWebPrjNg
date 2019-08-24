import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import {By} from "@angular/platform-browser";
import {Component, ViewChild} from "@angular/core";
import {RepositorySevice} from "../repository/repository.sevice";

@Component({
  template:'<app-favorites [favArr] = "favoritesArray"></app-favorites>'
})

class TestComponent {
  public favoritesArray = [];
  constructor() {
    this.favoritesArray = [{shortName:'Vasya'}];
  }

  @ViewChild(FavoritesComponent,null)
    favoritesComponent: FavoritesComponent;

}

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugEl;
  let bEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesComponent,TestComponent ]
    })

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance.favoritesComponent;
      debugEl = fixture.debugElement.query(By.directive(FavoritesComponent));
    });

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('contain Vasya',()=>{
    fixture.detectChanges();

    bEl = debugEl.query(By.css("b")).nativeElement;

    expect(bEl.textContent).toContain('Vasya');


  });



});
