import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
 @Output()
  onChangeEm = new EventEmitter();

  onSearchChange(text: any) {
    this.onChangeEm.emit(text.target.value);

  }
  ngOnInit() {
  }

}
