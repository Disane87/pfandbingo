import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageUploadModule } from '../image-upload/image-upload.module';
import { NgZorroModule } from '../ng-zorro-module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    NgZorroModule,
    RouterModule,
    ImageUploadModule
  ]
})
export class LayoutModule { }
