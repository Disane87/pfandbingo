import { Component, Inject, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PersistState } from '@datorama/akita';
import { UserMenuAction } from '@pfandbingo/endurance-layout';
import { ImageUploadComponent } from '@pfandbingo/endurance-ui';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthQuery } from './auth/state/auth.query';
import { AuthService } from './auth/state/auth.service';

@Component({
  selector: 'pfandbingo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userMenuActions: Array<UserMenuAction> = [
    { actionName: 'Upload', clickHandler: this.openUpload.bind(this), icon: 'cloud-upload' },
    { actionName: 'Logout', clickHandler: this.logout.bind(this), icon: 'logout' },
    { actionName: 'Delete', clickHandler: this.deleteUser.bind(this), icon: 'delete' },
  ];

  constructor(
    private auth: AuthService,
    private authQuery: AuthQuery,
    private router: Router,
    @Inject('persistStorage') private persistStorage: PersistState,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }
  public profile$ = this.authQuery.profile$;
  public accountVerified = this.authQuery.getValue().emailVerified;

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['auth/login']);
      this.persistStorage.clearStore();
    });

  }

  deleteUser() {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.auth.delete();
        this.router.navigate(['auth/login']);
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }


  sendVerifyMail() {
    this.auth.user.then(user => {
      return user.sendEmailVerification();
    }).then(() => {
      //
    })
  }

  openUpload() {
    const uploadModal = this.modal.create({
      nzTitle: 'Upload Avatar',
      nzContent: ImageUploadComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        path: `user/${this.authQuery.getValue().uid}`,
        fileName: 'avatar',
        fileTypes: 'image/png,image/jpeg,image/gif,image/bmp',
        disabled: this.accountVerified
      }
    });

    const uploadModalComponent = uploadModal.getContentComponent();

    uploadModalComponent.uploadComplete$.subscribe(uploadUrl => {
      this.auth.update({ photoURL: uploadUrl }).then();
      uploadModal.close();
    })
  }
}
