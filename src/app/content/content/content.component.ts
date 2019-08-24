import {Component, Injectable, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {Http} from '@angular/http';
import * as ts from "typescript";
import {InfoComponent} from "../../info/info.component";
import {MatDialog} from '@angular/material/dialog';
import {gameType} from "../../app.module";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
@Injectable()
export class ContentComponent implements OnChanges{
  @Input()
  gamesContentArr:gameType[];

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
  }
  constructor (private http: Http, public dialog: MatDialog) {

  }

  openInfo(game: gameType) {
    let dialogRef = this.dialog.open(InfoComponent, {
      width: '650px',
      height:'750px',
      data: game
    });

  }


  downloadFile(data: any) {
    //console.log(data);
    window.open(data);
  }


  download(url: string) {
    //console.log(url);
    window.open(url)
    //this.http.get(url).subscribe(data => this.downloadFile(data._body));
    //var WshShell = new ActiveXObject("WScript.Shell");
    //WshShell.Run ("notepad",2);


    let code: string = `({
      Run: (data: string): any => {
        let doc = new ActiveXObject("WScript.Shell");
        WshShell.Run ("notepad",2);
      })`;
    const e = eval;
    let result = ts.transpile(code);
    let runnalbe: any = e(result);
    runnalbe.Run('');



  }





}
