import { Component } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(keyword: string): void {
    console.log('from by region search => ', { keyword });
    this.countriesService.searchByRegion(keyword).subscribe((countries) => {
      return (this.countries = countries);
    });
  }
}
