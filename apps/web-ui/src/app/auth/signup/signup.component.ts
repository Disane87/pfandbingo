import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { AuthQuery } from '../state/auth.query';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'pfandbingo-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, public authService: AuthService, private authQuery: AuthQuery, private msg: NzMessageService, private router: Router) { }
  validateForm!: FormGroup;
  loginError$ = new Subject<string>();

  profile$ = this.authQuery.profile$;

  signInPending$ = this.authQuery.selectLoading();

  public isPasswordSame: boolean;

  signIn(): void {

    const userName = this.validateForm.get('email').value;
    const password = this.validateForm.get('password').value;

    this.authService
      .signup(userName, password)
      .then((data) => {
        data.user.sendEmailVerification();
        this.msg.info('Verification Mail has been send. Please check your inbox.')
      })
      .catch((err: firebase.FirebaseError) => {
        this.msg.error(err.message);
      });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordRepeat: [null, [Validators.required]],
      remember: [true]
    }, {
      validator: MustMatch('password', 'passwordRepeat')
    });
  }
}


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}