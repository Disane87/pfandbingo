import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Profile } from '../state/auth.state';

@Component({
  selector: 'pfandbingo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
