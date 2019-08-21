import {Component, Injectable, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {Http} from '@angular/http';
import * as ts from "typescript";
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
@Injectable()
export class ContentComponent implements OnChanges{
  @Input()
  gamesContentArr:any;

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
  }
  constructor (private http: Http) {

  }


  downloadFile(data: any) {
    console.log(data);
    //const blob = new Blob([data], { type: 'application/x-7z-compressed'});
    //const url= window.URL.createObjectURL(blob);
    window.open(data);
  }


  download(url) {
    console.log(url);
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
