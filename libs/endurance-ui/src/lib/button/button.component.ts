import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'eui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() title: string;
  @Input() loading: boolean;
  @Input() disabled: boolean;

  @Input() color = 'blue';

  @Input() type = '';

  @Input() shadow = true;

  @Input() textColor = 'white';

  @Output() clicked = new EventEmitter<void>();
  click() {
    this.clicked.emit();
  }

}
