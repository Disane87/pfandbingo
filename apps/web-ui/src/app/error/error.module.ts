import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro-module';
import { ErrorRoutingModule } from './error-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';



@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    NgZorroModule
  ]
})
export class ErrorModule { }
