import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countryInterface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  // !methods:
  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${query}`;
    return this.httpClient.get<Country[]>(url);
  }
}
