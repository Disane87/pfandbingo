import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { isDev } from '@datorama/akita';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToUpload = () => redirectLoggedInTo(['pfingo']);

const routes: Routes = [
  {
    path: '', ...canActivate(redirectUnauthorizedToLogin), children: [
      { path: '', redirectTo: 'pfingo', ...canActivate(redirectUnauthorizedToLogin), pathMatch: 'full' },
      {
        path: 'pfingo',
        ...canActivate(redirectUnauthorizedToLogin),
        loadChildren: () => import('./pfingo/pfingo.module').then(m => m.PfingoModule)
      },
      { path: '**', redirectTo: 'error/404' }
    ],

  },
  {
    path: 'auth',
    ...canActivate(redirectLoggedInToUpload),
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: 'error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: isDev() })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
