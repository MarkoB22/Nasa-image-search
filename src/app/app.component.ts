import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


}