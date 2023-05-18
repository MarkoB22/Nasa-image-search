import { Component } from '@angular/core';
import ImagesService from './service/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private imagesService: ImagesService) {}

  title = 'nasa-image-search';

  searchQuery: string = '';

  handleSearch(query: string) {
  this.imagesService.search();
}

  ImageDetails: any[] = [];
  onSearchQueryChange(query: string) {
    this.searchQuery = query;
  }
}
