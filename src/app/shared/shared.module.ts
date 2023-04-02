import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [SideNavComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideNavComponent, SearchBarComponent],
})
export class SharedModule {}
