import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}


  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  searchResults: any[] = [];
  searchInput: string = '';

  handleSearchResults(response: any): void {
    const items = response.collection.items;
    this.searchResults = items.map((item: any) => ({
      title: item.data[0].title,
      description: item.data[0].description,
      image: item.links[0].href,
      tags: item.data[0].keywords
    }));
  }

  isSearchRoute(): boolean {
    return this.router.url.includes('item') || this.router.url === '/';
  }

  isFirstResultRoute(): boolean {
    return this.router.url.includes('item');
  }
  
}