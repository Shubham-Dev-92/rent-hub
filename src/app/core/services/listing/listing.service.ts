import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../../models/listing.model';
import { API_URLS } from '../../constants/api_urls';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}

  // Method to fetch JSON data
  getListings(): Observable<Listing[]> {
    return this.http.get<any[]>(API_URLS.LISTINGS);
  }
}
