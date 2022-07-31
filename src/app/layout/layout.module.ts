import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from '../shared/header';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HeaderModule],
  exports: [FooterComponent],
  providers: [],
})
export class LayoutModule {}
