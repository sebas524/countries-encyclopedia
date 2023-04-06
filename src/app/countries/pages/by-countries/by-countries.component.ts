import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styles: [],
})
export class ByCountriesComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(keyword: string): void {
    console.log('from by capital search => ', { keyword });
    this.countriesService.searchByCountry(keyword).subscribe((countries) => {
      return (this.countries = countries);
    });
  }
}
