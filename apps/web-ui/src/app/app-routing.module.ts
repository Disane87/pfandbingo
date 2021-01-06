import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToUpload = () => redirectLoggedInTo(['upload']);

const routes: Routes = [
  {
    path: '', ...canActivate(redirectUnauthorizedToLogin), component: AppComponent, children: [
      { path: 'upload', component: ImageUploadComponent, ...canActivate(redirectUnauthorizedToLogin) }

    ]
  },
  {
    path: 'auth',
    ...canActivate(redirectLoggedInToUpload),
    // canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
