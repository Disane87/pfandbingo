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
  constructor(private fb: FormBuilder, public authService: AuthService, private authQuery: AuthQuery, private msg: NzMessageService, private router: Router) { }
  validateForm!: FormGroup;
  loginError$ = new Subject<string>();

  profile$ = this.authQuery.profile$;

  authPending$ = this.authQuery.selectLoading();



  signIn(): void {

    const userName = this.validateForm.get('userName').value;
    const password = this.validateForm.get('password').value;

    this.authService
      .signin(userName, password)
      .then(() => this.router.navigate(['upload']))
      // .then((user: firebase.auth.UserCredential) => {
      // })
      .catch((err: firebase.FirebaseError) => {
        this.msg.error(err.message);
      });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
