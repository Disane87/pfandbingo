import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../classes/control-value-accessor.class';

@Component({
  selector: 'pfandbingo-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent extends BaseControlValueAccessor<boolean> implements OnInit {

  @Input() label = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
