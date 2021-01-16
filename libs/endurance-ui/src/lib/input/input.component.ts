import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../classes/control-value-accessor.class';

@Component({
  selector: 'pfandbingo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseControlValueAccessor<string> {

  @Input() name: string = null;
  @Input() placeholder = '';
  @Input() value: string = null;

  @Input() preIcon: string = null;

  @Input() autoComplete: 'on' | null = 'on';

  @Input() type: string = null;

  constructor() {
    super();
  }

  valueChanged(value: string) {
    this.value = value;
    this.onChange(this.value);
  }


}
