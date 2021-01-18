import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EnduranceUiModule } from '@pfandbingo/endurance-ui';
import { TranslocoRootModule } from '../transloco/transloco-root.module';
import { LoginComponent } from './login/login.component';
import { NotValidatedAlertComponent } from './not-validated-alert/not-validated-alert.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AuthProviderComponent } from './auth-provider/auth-provider.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }

    ]
  }
];

@NgModule({
  declarations: [LoginComponent, SignupComponent, NotValidatedAlertComponent, ProfileComponent, AuthProviderComponent],
  imports: [
    CommonModule,
    EnduranceUiModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule
  ],
  exports: [RouterModule, NotValidatedAlertComponent]
})
export class AuthModule { }
