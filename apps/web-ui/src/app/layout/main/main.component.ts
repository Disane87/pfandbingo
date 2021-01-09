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


  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['auth/login']);
      this.persistStorage.destroy();
    });

  }

  openUpload(uploadType: string) {
    const uploadModal = this.modal.create({
      nzTitle: 'Upload Avatar',
      nzContent: ImageUploadComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        path: `user/${this.authQuery.getValue().uid}`,
        fileName: uploadType,
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
