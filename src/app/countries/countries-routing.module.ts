import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCountriesComponent } from './pages/by-countries/by-countries.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SpecificCountryComponent } from './pages/specific-country/specific-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'by-countries', component: ByCountriesComponent },
      { path: 'by-capital', component: ByCapitalComponent },

      { path: 'by-region', component: ByRegionComponent },
      { path: 'by-country/:id', component: SpecificCountryComponent },

      { path: '**', redirectTo: 'by-countries' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
