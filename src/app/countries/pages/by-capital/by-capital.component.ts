import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  searchByCapital(keyword: string): void {
    console.log('from by capital search => ', { keyword });
  }
}
