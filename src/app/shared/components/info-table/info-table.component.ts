import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/countryInterface';

@Component({
  selector: 'shared-info-table',
  templateUrl: './info-table.component.html',
  styles: [],
})
export class InfoTableComponent {
  @Input()
  public countries: Country[] = [];
}
