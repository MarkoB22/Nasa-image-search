import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  searchQuery: string = '';

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  search() {
    // Emit the searchQuery value to the parent component
    this.searchEmitter.emit(this.searchQuery);
  }

}