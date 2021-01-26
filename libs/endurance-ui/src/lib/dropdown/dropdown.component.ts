import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { DropDownItem } from './interfaces/dropdown-item.interface';

@Component({
  selector: 'eui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  constructor(private eRef: ElementRef) { }

  public opened = false;

  @Input() selectedItem: DropDownItem<string> = null;

  @Input() selectedItemKey: string = null;
  @Input() items: Array<DropDownItem<string>> = [];

  @Input() itemTemplate: TemplateRef<any> = null;

  @Input() label: string = null;

  @Input() disabled = false;

  @Input() name: string = null;

  @Input() color = 'white';

  @Input() textColor = 'gray-600';


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }

  ngOnInit(): void {
    if (this.selectedItemKey) {
      this.selectedItem = this.items.find(item => item.value == this.selectedItemKey);
    }
  }

}
