import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/state/auth.service';

@Component({
  selector: 'pfandbingo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor(private auth: AuthService, private router: Router, @Inject('persistStorage') private persistStorage
  ) { }

  isCollapsed = false;


  logout() {
    this.auth.signOut().then(() => this.router.navigate(['auth/login']));
    this.persistStorage.clearStore();
  }
}
