import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { InputComponent } from './input/input.component';
import { NgZorroModule } from './ng-zorro-module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, NgZorroModule],
  declarations: [ButtonComponent, InputComponent, CheckboxComponent, ImageUploadComponent],
  exports: [ButtonComponent, InputComponent, FontAwesomeModule, CheckboxComponent, NgZorroModule, ImageUploadComponent],
})
export class EnduranceUiModule {
  constructor(private library: FaIconLibrary, private faConfig: FaConfig) {
    library.addIconPacks(fab, fal, far);
    this.faConfig.defaultPrefix = 'far';
  }
}
