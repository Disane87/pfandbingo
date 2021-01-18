import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ControlErrorComponent } from './control-error/control-error.component';
import { ControlErrorContainerDirective } from './directives/control-error-container.directive';
import { ControlErrorsDirective } from './directives/control-error.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageComponent } from './image/image.component';
import { InputComponent } from './input/input.component';
import { NgZorroModule } from './ng-zorro-module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, NgZorroModule],
  // eslint-disable-next-line max-len
  declarations: [ButtonComponent, InputComponent, CheckboxComponent, ImageUploadComponent, ImageComponent, AlertComponent, ControlErrorsDirective, FormSubmitDirective, ControlErrorComponent, ControlErrorContainerDirective],
  // eslint-disable-next-line max-len
  exports: [ButtonComponent, InputComponent, FontAwesomeModule, CheckboxComponent, NgZorroModule, ImageUploadComponent, ImageComponent, AlertComponent, ControlErrorsDirective, FormSubmitDirective, ControlErrorContainerDirective],
})
export class EnduranceUiModule {
  constructor(private library: FaIconLibrary, private faConfig: FaConfig) {
    library.addIconPacks(fab, fal, far);
    this.faConfig.defaultPrefix = 'far';
  }
}
