import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-specific-country',
  templateUrl: './specific-country.component.html',
  styles: [],
})
export class SpecificCountryComponent implements OnInit {
  public specificCountry?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          console.log('code =>', id);

          return this.countriesService.searchByCode(id);
        })
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return (this.specificCountry = country);
      });
  }
}
