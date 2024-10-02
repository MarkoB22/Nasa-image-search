import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private sharedService: SharedService) {}

  @Input() input: string = '';

  @Output() searchResults: EventEmitter<any[]> = new EventEmitter<any[]>();

  search(): void {
    this.sharedService.imageDetails(this.input)
      .subscribe((response: any) => {
        this.searchResults.emit(response);
      });
  }

}