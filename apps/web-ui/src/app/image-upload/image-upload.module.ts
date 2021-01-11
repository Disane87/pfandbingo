import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AuthModule } from '../auth/auth.module';
import { NgZorroModule } from '../ng-zorro-module';
import { ImageUploadComponent } from './image-upload.component';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule, NgZorroModule, AngularFireModule, AuthModule
  ],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule { }
