import { Component } from '@angular/core';
import { AuthQuery } from './auth/state/auth.query';

@Component({
  selector: 'pfandbingo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-ui';

  constructor(private auth: AuthQuery) { }
  public loggedIn$ = this.auth.profile$;

  ngOnInit() {

  }
}
