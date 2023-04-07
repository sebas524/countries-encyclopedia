import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { CountriesService } from '../../services/countries.service';
import { Regions } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent implements OnInit {
  public countries: Country[] = [];
  public loading: boolean = false;

  public selectedRegion?: Regions;
  public availableRegions: Regions[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(keyword: Regions): void {
    this.loading = true;

    this.selectedRegion = keyword;
    console.log('from by region search => ', { keyword });
    this.countriesService.searchByRegion(keyword).subscribe((countries) => {
      this.loading = false;

      return (this.countries = countries);
    });
  }
}
