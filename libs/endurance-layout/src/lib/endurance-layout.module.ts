import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnduranceUiModule } from '@pfandbingo/endurance-ui';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    EnduranceUiModule,
    RouterModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [MainComponent]
})
export class EnduranceLayoutModule { }
