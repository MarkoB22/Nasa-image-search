import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResults: any;
  searchInput: string = '';

  handleSearchResults(results: any[]): void {
    this.searchResults = results;
    console.log(this.searchResults);
  }
}