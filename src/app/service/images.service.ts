import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class ImagesService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://images-api.nasa.gov';

  searchResults: string[] = [];

  @Input() searchQuery: any[] = [];

  search(): void {
    this.imageDetails(this.searchQuery)
      .subscribe((response: any) => {
        this.searchResults = response;
        console.log(this.searchResults);
      });
  }
  
  imageDetails(searchQuery: any[]): Observable<any> {
    const url = `${this.apiUrl}?query=${searchQuery}&media_type=image`;

    return this.http.get(url);
  }
}
