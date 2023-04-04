import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(keyword: string): void {
    console.log('from by capital search => ', { keyword });
    this.countriesService.searchByCapital(keyword).subscribe((countries) => {
      return (this.countries = countries);
    });

    console.log(this.countries);
  }
}
