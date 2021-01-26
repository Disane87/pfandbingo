import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { CollectionConfig, FireAuthService } from 'akita-ng-fire';
import firebase from 'firebase';
import { isEqual } from 'lodash-es';
import { AuthState, AuthStore, Profile } from './auth.state';


@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {

  constructor(store: AuthStore, private transloco: TranslocoService) {
    super(store);

    this.sync().subscribe();
  }

  createProfile(user: firebase.User): AuthState['profile'] {
    return { uid: user.uid, email: user.email, displayName: user.email, photoURL: '', language: this.transloco.getDefaultLang() };
  }

  updateProfile(profile: Partial<Profile>): Promise<any> {
    if (!isEqual(this.store.getValue().profile, profile)) {
      return this.update(profile);
    }

    return Promise.reject();
  }



}