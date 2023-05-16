
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import ImagesService from '../service/images.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchQuery: string = '';
  searchResults: string[] = [];
  constructor (

    private ImagesService: ImagesService

  ){}

  search() {
    // Perform your search logic here, e.g., call an API
    // and update the searchResults array with the returned data
    // For simplicity, let's assume we have a hardcoded array of results
    
     this.searchResults = [
       'Result 1',
       'Result 2',
       'Result 3'
     ];

  //  this.searchResults = this.ImagesService.fetchImages;
  }
}