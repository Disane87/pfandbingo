/* eslint-disable max-len */
import { ChangeDetectionStrategy, Component, Inject, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PersistState } from '@datorama/akita';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthQuery } from '../../auth/state/auth.query';
import { AuthService } from '../../auth/state/auth.service';
import { ImageUploadComponent } from '../../image-upload/image-upload.component';

@Component({
  selector: 'pfandbingo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor(
    private auth: AuthService,
    private authQuery: AuthQuery,
    private router: Router,
    @Inject('persistStorage') private persistStorage: PersistState,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  isCollapsed = false;

  profile$ = this.authQuery.profile$;


  // eslint-disable-next-line @typescript-eslint/ban-types
  userActions: Array<{ actionName: string, clickHandler: Function; icon: string }> = [
    { actionName: 'Upload', clickHandler: this.openUpload.bind(this), icon: 'cloud-upload' },
    { actionName: 'Logout', clickHandler: this.logout.bind(this), icon: 'logout' },
    { actionName: 'Delete', clickHandler: this.deleteUser.bind(this), icon: 'delete' },
  ];


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
        fileTypes: 'image/png,image/jpeg,image/gif,image/bmp'
      }
    });

    const uploadModalComponent = uploadModal.getContentComponent();

    uploadModalComponent.uploadComplete$.subscribe(uploadUrl => {
      this.auth.update({ photoURL: uploadUrl }).then();
      uploadModal.close();
    })
  }
}
