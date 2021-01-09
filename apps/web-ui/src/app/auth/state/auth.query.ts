import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.state';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
    profile$ = this.select('profile');
    roles$ = this.select('roles');    // check section "roles" below

    constructor(protected store: AuthStore) {
        super(store);
    }

    public get userId(): string {
        return this.getValue().uid;
    }

    getUserId() {

    }
}