import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/state/auth.service';

@Component({
  selector: 'pfandbingo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor(private auth: AuthService, private router: Router
  ) { }

  isCollapsed = false;


  logout() {
    debugger;
    this.auth.signOut().then(() => this.router.navigate(['auth/login']));
  }
}
