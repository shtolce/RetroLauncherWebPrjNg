import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {gameType} from "../app.module";

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let data:gameType = {shortName:'Vasya',fullName:'Vasya',platformType:'type', genreName: 'genre', year:1000,
    imgUrl:'', downloadUrl:'', annotation:''
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent ],
      providers: [
        {provide:MatDialogRef},
        {provide:MAT_DIALOG_DATA,useValue: data}

      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
