import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})

export class ImageDisplayComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';
}
