/* eslint-disable max-len */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserMenuAction } from './interfaces/user-menu-action.interface';

@Component({
  selector: 'endurance-layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor() { }

  isCollapsed = false;

  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input() userMenuActions: Array<UserMenuAction> = [];

  @Input() photoUrl: string = null;
}
