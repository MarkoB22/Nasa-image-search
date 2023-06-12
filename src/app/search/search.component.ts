import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(
    private http: HttpClient,
    private sharedService: SharedService
    ) {}

  @Input() apiUrl: string = '';
  @Input() mediaType: string = '';
  @Input() input: string = '';

  @Output() searchResults: EventEmitter<any[]> = new EventEmitter<any[]>();

  search(): void {
    this.imageDetails(this.input)
      .subscribe((response: any) => {
        this.searchResults.emit(response);
        this.sharedService.setSearchResults(response);
      });
  }
  
  imageDetails(input: string): Observable<any> {

    const url = `${this.apiUrl}${input}${this.mediaType}`;

    return this.http.get(url);
  }

}