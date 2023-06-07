import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-first-result-display',
  templateUrl: './first-result-display.component.html',
  styleUrls: ['./first-result-display.component.css']
})
export class FirstResultDisplayComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';

  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  query: string = '';
  result: any;

  handleSearchResults(results: any[]): void {
    this.result = results[0];
  }

  triggerSearch(): void {
    if (this.searchComponent) {
      this.searchComponent.search();
    }
  }
}
