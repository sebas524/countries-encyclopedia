import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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

    //! observable:
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err) => {
        return of([]);
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${query}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err) => {
        return of([]);
      })
    );
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${query}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err) => {
        return of([]);
      })
    );
  }

  searchByCode(code: string): Observable<Country | null> {
    const url = `${this.baseUrl}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => {
        return countries.length > 0 ? countries[0] : null;
      }),
      catchError((err) => {
        return of(null);
      })
    );
  }
}
