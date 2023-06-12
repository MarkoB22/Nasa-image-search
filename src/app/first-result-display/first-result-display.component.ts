import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first-result-display',
  templateUrl: './first-result-display.component.html',
  styleUrls: ['./first-result-display.component.css']
})
export class FirstResultDisplayComponent implements OnInit {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  result: any;
  query: string = '';

  @Input() set searchResults(value: any[]) {
    if (value && value.length > 0) {
      this.handleSearchResults(value);
    }
  }

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.searchResults$.subscribe((results : any[]) => {
      if (results .length > 0) {
        this.searchResults = results;
        this. result = this.searchResults[0];
      }
    });
  }

  handleSearchResults(searchResults: any[]): void {
    this.result = searchResults[0];
  }

  triggerSearch(): void {
    if (this.searchComponent) {
      this.searchComponent.input = this.query;
      this.searchComponent.search();
    }
  }
}
