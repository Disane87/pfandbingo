import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'pfandbingo-not-validated-alert',
  templateUrl: './not-validated-alert.component.html',
  styleUrls: ['./not-validated-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotValidatedAlertComponent {
  constructor(private authService: AuthService, private msg: NzMessageService) { }
  resendVerifiyEmail() {
    this.authService.user.then(user => {
      user.sendEmailVerification();
      this.msg.info('Verification email has been send. Please check your mailbox.')
    })

  }
}
