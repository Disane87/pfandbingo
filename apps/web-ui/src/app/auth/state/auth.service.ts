import { Injectable } from '@angular/core';
import { CollectionConfig, FireAuthService } from 'akita-ng-fire';
import { AuthState, AuthStore, Profile } from './auth.state';


@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {

  constructor(store: AuthStore) {
    super(store);

    this.sync().subscribe();
  }

  createProfile(user: Profile): AuthState['profile'] {
    return { uid: user.uid, email: user.email, displayName: user.email, photoURL: '' };

    this.selectProfile
  }


}