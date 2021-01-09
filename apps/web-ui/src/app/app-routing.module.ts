import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { TodosComponent } from './todos/todos/todos.component';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToUpload = () => redirectLoggedInTo(['pfingo']);

const routes: Routes = [
  {
    path: '', ...canActivate(redirectUnauthorizedToLogin), component: MainComponent, children: [
      { path: 'todos', component: TodosComponent, ...canActivate(redirectUnauthorizedToLogin) },
      { path: '**', redirectTo: 'error/404' },
      {
        path: 'pfingo',
        ...canActivate(redirectUnauthorizedToLogin),
        // canActivate: [AngularFireAuthGuard],
        loadChildren: () => import('./pfingo/pfingo.module').then(m => m.PfingoModule)
      },
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
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
