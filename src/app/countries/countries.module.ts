import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { ContactPageComponent } from '../shared/pages/contact-page/contact-page.component';
import { ByCountriesComponent } from './pages/by-countries/by-countries.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SpecificCountryComponent } from './pages/specific-country/specific-country.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, ContactPageComponent, ByCountriesComponent, ByRegionComponent, SpecificCountryComponent],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
