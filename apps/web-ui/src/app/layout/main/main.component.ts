import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../auth/state/auth.service';

@Component({
  selector: 'pfandbingo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor(private auth: AuthService) { }


  logout() {
    this.auth.signOut().then();
  }
}
