import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnduranceUiModule } from '@pfandbingo/endurance-ui';
import { PfingoDetailsComponent } from './pfingo-details/pfingo-details.component';
import { PfingoItemComponent } from './pfingo-item/pfingo-item.component';
import { PfingoRoutingModule } from './pfingo-routing.module';
import { PfingoComponent } from './pfingo.component';



@NgModule({
  declarations: [PfingoComponent, PfingoDetailsComponent, PfingoItemComponent],
  imports: [
    CommonModule,
    PfingoRoutingModule,
    EnduranceUiModule
  ]
})
export class PfingoModule { }
