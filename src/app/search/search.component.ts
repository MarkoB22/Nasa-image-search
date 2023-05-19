import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://images-api.nasa.gov';
  
  input: string = '';
  searchResults: any;

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  search(input: string): void {
    this.imageDetails(input)
      .subscribe((response: any) => {
        this.searchResults = response.collection.items.map((item: any) => {
          return {
            title: item.data[0].title,
            description: item.data[0].description,
            image: item.links[0].href
          };
        });
      });
      console.log(this.searchResults);
  }
  
  imageDetails(input: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${input}&media_type=image`;

    return this.http.get(url);
  }

}