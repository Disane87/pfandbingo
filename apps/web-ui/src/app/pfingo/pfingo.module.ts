import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from '../image-upload/image-upload.module';
import { NgZorroModule } from '../ng-zorro-module';
import { PfingoDetailsComponent } from './pfingo-details/pfingo-details.component';
import { PfingoRoutingModule } from './pfingo-routing.module';
import { PfingoComponent } from './pfingo.component';



@NgModule({
  declarations: [PfingoComponent, PfingoDetailsComponent],
  imports: [
    CommonModule,
    PfingoRoutingModule,
    ImageUploadModule,
    NgZorroModule
  ]
})
export class PfingoModule { }
