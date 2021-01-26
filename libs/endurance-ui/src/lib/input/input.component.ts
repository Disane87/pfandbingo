import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../classes/control-value-accessor.class';

@Component({
  selector: 'eui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
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

  @Input() label: string = null;

  @Input() class: string = null;

  @Input() disabled = false;

  public typeBeforeChange: string = null;

  constructor() {
    super();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.typeBeforeChange = this.type;
  }

  valueChange(value: string) {
    this.value = value;
    this.onChange(this.value);
  }


}
