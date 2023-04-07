import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countryInterface';
import { CacheStore } from '../interfaces/cacheStore.interface';
import { Regions } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }
  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) {
      return;
    }
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getHttpReq(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err) => {
        return of([]);
      })
    );
  }

  // !methods:
  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${query}`;

    return this.getHttpReq(url).pipe(
      tap((countries) => {
        return (this.cacheStore.byCapital = {
          term: query,
          countries: countries,
        });
      }),
      tap(() => {
        return this.saveToLocalStorage();
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${query}`;
    return this.getHttpReq(url).pipe(
      tap((countries) => {
        return (this.cacheStore.byCountries = {
          term: query,
          countries: countries,
        });
      }),
      tap(() => {
        return this.saveToLocalStorage();
      })
    );
  }

  searchByRegion(region: Regions): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.getHttpReq(url).pipe(
      tap((countries) => {
        return (this.cacheStore.byRegion = {
          region: region,
          countries: countries,
        });
      }),
      tap(() => {
        return this.saveToLocalStorage();
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
