import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pfandbingo-auth-provider',
  templateUrl: './auth-provider.component.html',
  styleUrls: ['./auth-provider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthProviderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
