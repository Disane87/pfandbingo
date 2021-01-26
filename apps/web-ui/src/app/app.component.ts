import { Component, HostBinding, Inject, isDevMode, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PersistState } from '@datorama/akita';
import { UserMenuAction } from '@pfandbingo/endurance-layout';
import { ImageUploadComponent } from '@pfandbingo/endurance-ui';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthQuery } from './auth/state/auth.query';
import { AuthService } from './auth/state/auth.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userMenuActions: Array<UserMenuAction> = [
    { actionName: 'Upload', clickHandler: this.openUpload.bind(this), icon: 'cloud-upload' },
    { actionName: 'Logout', clickHandler: this.logout.bind(this), icon: 'logout' },
    { actionName: 'Delete', clickHandler: this.deleteUser.bind(this), icon: 'delete' },
    { actionName: 'Profile', clickHandler: this.openProfile.bind(this), icon: 'user' },
  ];

  constructor(
    private auth: AuthService,
    private authQuery: AuthQuery,
    private router: Router,
    private msg: NzMessageService,
    @Inject('persistStorage') private persistStorage: PersistState,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }
  public profile$ = this.authQuery.profile$;
  public verifiedProfile$ = this.authQuery.verifiedProfile$;

  @HostBinding('class.debug-screens') debugScreens = isDevMode();

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['auth/login']);
      this.persistStorage.clearStore();
    });

  }

  @HostBinding()

  deleteUser() {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.auth.delete().then(() =>
          this.router.navigate(['auth/login'])

        );
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

  openProfile() {
    const profile = this.authQuery.getValue().profile;
    this.modal.create({
      nzTitle: `Profile of ${profile.displayName}`,
      nzContent: ProfileComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        profile: { ...profile }
      },
      nzOnOk: (component) => {
        this.auth.updateProfile(component.profile).then(() => this.msg.info('Profile successfully updated'));

      },
      nzOkText: 'Save',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'Cancel',
      nzOnCancel: () => console.log('Cancel')
    });
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
      }
    });

    const uploadModalComponent = uploadModal.getContentComponent();

    uploadModalComponent.fileUpload.subscribe(uploadUrl => {
      this.auth.update({ photoURL: uploadUrl }).then();
      this.auth.sync();
      uploadModal.close();
    })
  }
}
