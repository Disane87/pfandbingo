import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from '../ng-zorro-module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    NgZorroModule,
    RouterModule
  ]
})
export class LayoutModule { }
