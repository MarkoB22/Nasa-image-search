import { Component, Input } from '@angular/core';
import ImagesService from '../service/images.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent {
  @Input() ImageDetails: any[] = []; // Property to receive image details from parent component

  imageDetails: any[] = []; // Array to store fetched image details

  searchResults: string[] = []; // Not sure if this property is necessary, assuming it will be used later

  constructor(private imagesService: ImagesService) { }

}
