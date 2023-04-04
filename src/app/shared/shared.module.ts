import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InfoTableComponent } from './components/info-table/info-table.component';

@NgModule({
  declarations: [SideNavComponent, SearchBarComponent, InfoTableComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideNavComponent, SearchBarComponent, InfoTableComponent],
})
export class SharedModule {}
