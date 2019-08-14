const itemsPerPageDef:number = 4;
const numOfItemsDef: number = 6;
const currentPageDef:number = 1;
const showPages: number = 5;

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  itemsPerPage:number;
  @Input()
  numOfItems: number;
  @Input()
  currentPage:number;
  @Output()
  nextPage = new EventEmitter<number>();
  @Output()
  prevPage = new EventEmitter<boolean>();
  @Output()
  onPage = new EventEmitter<number>();


  goPrevPage() {
    if (this.currentPage>1)
      this.nextPage.emit(--this.currentPage);
  }

  getMaxPages() {
    return Math.ceil((this.numOfItems|| numOfItemsDef)/this.itemsPerPage);
  }
  goOnPage(numP: any) {
      this.onPage.emit(numP.target.text);
  }
  goNextPage() {
    if (this.currentPage<this.getMaxPages())
      this.nextPage.emit(++this.currentPage);
  }

  get pages():number[] {
    let pageArr = [];
    let curP = this.currentPage || currentPageDef;
    pageArr.push(curP);

    for (let i=0;i<showPages;i++) {
      let leftShift = Math.min.apply(null,pageArr)-1;
      let rightShift = Math.max.apply(null,pageArr)+1;
      let arrLen = pageArr.length;
      if (arrLen < showPages) {
        if (leftShift >= 1)
          pageArr.push(leftShift);

        if (rightShift <= this.getMaxPages())
           pageArr.push(rightShift);
      }
      pageArr.sort((a, b) => a - b);

    }
    return pageArr;
  }


  constructor() { }

  ngOnInit() {

  }
  getPages





}
