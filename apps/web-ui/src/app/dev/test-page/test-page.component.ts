import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { EnduranceFile } from '@pfandbingo/endurance-ui';
import { Guid } from 'guid-typescript';
import { NzMessageService } from 'ng-zorro-antd/message';
import { first, last, map, switchMap, tap } from 'rxjs/operators';
import { AuthQuery } from '../../auth/state/auth.query';

@Component({
  selector: 'pfandbingo-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPageComponent {
  constructor(private fireStorage: AngularFireStorage, private msg: NzMessageService, private authQuery: AuthQuery) { }

  upload(items: EnduranceFile[]) {
    items.forEach(async item => {
      const fileName = Guid.create().toString(); //item.file.name;
      const fileExtension = item.file.name.substr(item.file.name.lastIndexOf('.') + 1);

      const uid = await this.authQuery.profile$.pipe(first(), map(data => data.uid)).toPromise();
      const uploadPath = `pfingos/${uid}/${fileName}.${fileExtension}`;

      const upload = this.fireStorage.upload(uploadPath, item.file);
      const fileRef = this.fireStorage.ref(uploadPath);
      upload.percentageChanges().subscribe(percent => {
        // this.msg.success('Upload pending ' + Math.trunc(percent) + '%');
        item.onProgress.next(Math.trunc(percent))
        // this.progressChanged.emit(Math.trunc(percent))
      })

      upload.snapshotChanges().pipe(

        last(),
        tap(() => item.onSuccess.next(true)),
        switchMap(() => fileRef.getDownloadURL()),
        tap(downloadUrl => {
          // this.uploadComplete$.next(downloadUrl);
          // this.fileUploaded.emit(downloadUrl);
          // this.fileList = [];
        })
      ).subscribe()
    })

  }

}
