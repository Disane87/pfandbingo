import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { NgZorroModule } from '../ng-zorro-module';
import { ImageUploadComponent } from './image-upload.component';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule, NgZorroModule, AngularFireModule
  ],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule { }
