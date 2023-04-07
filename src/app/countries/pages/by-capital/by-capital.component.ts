import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent implements OnInit {
  public countries: Country[] = [];
  public loading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(keyword: string): void {
    this.loading = true;
    console.log('from by capital search => ', { keyword });
    this.countriesService.searchByCapital(keyword).subscribe((countries) => {
      this.loading = false;
      return (this.countries = countries);
    });
  }
}
