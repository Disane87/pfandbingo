import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Subject } from 'rxjs';
import { last, switchMap, tap } from 'rxjs/operators';
import { AuthQuery } from '../auth/state/auth.query';

@Component({
  selector: 'pfandbingo-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent {
  uploading = false;
  fileList: NzUploadFile[] = [];

  @Input() path = '';
  @Input() fileName = '';

  @Input() fileTypes = '*';

  @Input() title = 'Werfe hier einfach ein Bild hin oder klicke zum Hochladen';

  @Output() fileUploaded = new EventEmitter<string>();

  uploadComplete$ = new Subject<string>();

  constructor(private msg: NzMessageService, private fireStorage: AngularFireStorage, private authQuery: AuthQuery) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  disabled$ = this.authQuery.select('emailVerified');
  customUploadReq = (item: NzUploadXHRArgs) => {
    const fileName = item.file.name;
    const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
    const fileNameWithoutExtension = fileName.substr(0, fileName.lastIndexOf('.'));
    const uploadPath = `${this.path}/${this.fileName || fileNameWithoutExtension}.${fileExtension}`;

    const upload = this.fireStorage.upload(uploadPath, item.file);
    const fileRef = this.fireStorage.ref(uploadPath);
    upload.percentageChanges().subscribe(percent => {
      // this.msg.success('Upload pending ' + Math.trunc(percent) + '%');
      item.onProgress({ percent: Math.trunc(percent) }, item.file)
    })

    upload.snapshotChanges().pipe(

      last(),
      tap(() => item.onSuccess('Complete', item.file, null)),
      switchMap(() => fileRef.getDownloadURL()),
      tap(downloadUrl => {
        this.uploadComplete$.next(downloadUrl);
        this.fileUploaded.emit(downloadUrl);
        this.fileList = [];
      })
    ).subscribe()



    return this.uploadComplete$;
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

}
