import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HeaderModule } from '../../shared/header';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, HeaderModule],
})
export class DemoModule {}
