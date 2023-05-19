import { Component, Input } from '@angular/core';
import ImagesService from './service/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private imagesService: ImagesService) {}

  searchEmitter: string = '';

  ImageDetails: any[] = [];

  onSearchQueryChange(query: string) {
    this.searchEmitter = query;
  }
}
