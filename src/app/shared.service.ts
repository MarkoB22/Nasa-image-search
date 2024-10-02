import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SharedService {

  constructor(private http: HttpClient,) {}

  // make a request to nasa API to retrieve a list of images and their details
  imageDetails(input: string): Observable<any> {

    const url = `https://images-api.nasa.gov/search?media_type=image&q=${input}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        return response.collection.items;
      })
    );
    
  }
}
