/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { AuthPipe, canActivate, emailVerified, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestPageComponent } from './dev/test-page/test-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectToStart = () => redirectLoggedInTo(['pfingo']);
// const redirectLoggedInToUpload: AuthPipe = () =>
//   pipe(emailVerified, map(verified => verified ? ['auth/login'] : ['pfingo']));

const redirectUnverified: () => AuthPipe = () => pipe(emailVerified, map(verified => verified ? true : ['auth/login']));
const redirectVerified: () => AuthPipe = () => pipe(emailVerified, map(verified => !verified ? true : ['pfingo']));


const routes: Routes = [
  {
    path: '', ...canActivate(redirectUnverified), children: [
      { path: '', redirectTo: 'pfingo', ...canActivate(redirectUnverified), pathMatch: 'full' },
      {
        path: 'pfingo',
        ...canActivate(redirectUnverified),
        loadChildren: () => import('./pfingo/pfingo.module').then(m => m.PfingoModule)
      },
      { path: 'test', component: TestPageComponent },
      { path: '**', redirectTo: 'error/404' }
    ],

  },
  {
    path: 'auth',
    ...canActivate(redirectVerified),
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: 'error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
