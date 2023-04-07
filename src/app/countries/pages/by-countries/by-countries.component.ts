import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styles: [],
})
export class ByCountriesComponent implements OnInit {
  public countries: Country[] = [];
  public loading: boolean = false;

  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(keyword: string): void {
    this.loading = true;

    console.log('from by capital search => ', { keyword });
    this.countriesService.searchByCountry(keyword).subscribe((countries) => {
      this.loading = false;

      return (this.countries = countries);
    });
  }
}
