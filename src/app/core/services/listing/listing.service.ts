import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private jsonUrl = 'public/listing/listings.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  // Method to fetch listings from JSON file
  getListings(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
