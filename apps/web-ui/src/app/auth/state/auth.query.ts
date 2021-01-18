import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Query } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.state';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
    public profile$ = this.select('profile');
    public roles$ = this.select('roles');    // check section "roles" below


    public loggedInAndMailVerified$ = this.fireAuth.user.pipe(
        map(user => user && user.emailVerified ? user : false)
    );



    constructor(protected store: AuthStore, private fireAuth: AngularFireAuth) {
        super(store);
    }

    public get userId(): string {
        return this.getValue().uid;
    }

    getUserId() {

    }
}