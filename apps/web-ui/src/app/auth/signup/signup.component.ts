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

  authPending$ = this.authQuery.selectLoading();

  public isPasswordSame: boolean;

  signIn(): void {

    const userName = this.validateForm.get('userName').value;
    const password = this.validateForm.get('password').value;

    this.authService
      .signup(userName, password)
      .then((data) => {
        // this.router.navigate(['pfingo']);
        data.user.sendEmailVerification();
      })
      .catch((err: firebase.FirebaseError) => {
        this.msg.error(err.message);
      });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordRepeat: [null, [Validators.required, this.passwordsMatchValidator]],
      remember: [true]
    });
  }



  private passwordsMatchValidator(form: FormGroup) {
    if (form.get('password') && form.get('passwordRepeat')) {
      return form.get('password').value === form.get('passwordRepeat').value ? null : { mismatch: true };
    }
    return null;
  }
}

