import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private http: HttpClient) {}

  @Input() apiUrl: string = '';

  @Input() input: string = '';

  @Output() searchResults: EventEmitter<any[]> = new EventEmitter<any[]>();

  search(searchInput: string): void {
    this.imageDetails(searchInput)
      .subscribe((response: any) => {
        const results = response.collection.items.map((item: any) => {
          return {
            title: item.data[0].title,
            description: item.data[0].description,
            image: item.links[0].href,
            tags: item.data[0].keywords
          };
        });
  
        this.searchResults.emit(results);
      });
  }
  
  
  imageDetails(input: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${input}&media_type=image`;

    return this.http.get(url);
  }

}