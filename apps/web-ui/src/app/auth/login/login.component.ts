import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { AuthQuery } from '../state/auth.query';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'pfandbingo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  // eslint-disable-next-line max-len
  constructor(private fb: FormBuilder, public authService: AuthService, private authQuery: AuthQuery, private msg: NzMessageService, private router: Router) { }
  validateForm!: FormGroup;
  loginError$ = new Subject<string>();

  profile$ = this.authQuery.profile$;

  authPending$ = this.authQuery.selectLoading();



  signIn(): void {

    const email = this.validateForm.get('email').value;
    const password = this.validateForm.get('password').value;

    this.authService
      .signin(email, password)
      // .then(() => this.router.navigate(['pfingo']))
      .then((userCredential: firebase.auth.UserCredential) => {
        if (!userCredential.user.emailVerified) {

          this.msg.error('User not verified. Please check your emails');

        }
      })
      .catch((err: firebase.FirebaseError) => {
        this.msg.error(err.message);
      });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
