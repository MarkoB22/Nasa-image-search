import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class ImagesService {
    constructor(private http: HttpClient) {
        
    }

 //   fetchImages():string[] {
//
  //      return this.http.get('https://images-assets.nasa.gov/image/S69-59538/S69-59538~thumb.jpg')
//
  //  }
}