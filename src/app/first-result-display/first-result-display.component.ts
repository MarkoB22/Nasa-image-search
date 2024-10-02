import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-first-result-display',
  templateUrl: './first-result-display.component.html',
  styleUrls: ['./first-result-display.component.css']
})
export class FirstResultDisplayComponent implements OnInit {

  result: any;
  query: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(urlSegments => {
      console.log(this.activatedRoute);
      const lastSegment = urlSegments[urlSegments.length - 1].path;
      this.query = lastSegment.replace(/-/g, ' ');
    });
    this.sharedService.imageDetails(this.query).subscribe(response => {
      this.result = {
        title: response[0].data[0].title,
        description: response[0].data[0].description,
        image: response[0].links[0].href,
        tags: response[0].data[0].keywords
      };
    });
  }

  handleSearchResults(results: any[]): void {
    this.result = results[0];
  }

}
