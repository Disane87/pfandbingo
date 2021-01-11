import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pfandbingo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() title: string;
  @Input() loading: boolean;
  @Input() disabled: boolean;

  @Input() type = '';

  @Output() clicked = new EventEmitter<void>();
  click() {
    this.clicked.emit();
  }

}
