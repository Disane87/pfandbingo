import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FireAuthState, initialAuthState } from 'akita-ng-fire';

export interface Profile {
    displayName: string;
    photoURL: string;
    uid: string;

    email: string;
}

export type AuthState = FireAuthState<Profile>

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
    constructor() {
        super(initialAuthState);
    }
}