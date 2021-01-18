import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Guid } from 'guid-typescript';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Subject } from 'rxjs';
import { last, switchMap, tap } from 'rxjs/operators';

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

  @Input() photoUrl: string;
  @Input() disabled = false;


  @Output() fileUploaded = new EventEmitter<string>();

  @Output() progressChanged = new EventEmitter<number>();





  uploadComplete$ = new Subject<string>();

  constructor(private msg: NzMessageService, private fireStorage: AngularFireStorage) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // disabled$ = this.authQuery.select('emailVerified');
  customUploadReq = (item: NzUploadXHRArgs) => {
    const fileName = Guid.create().toString(); //item.file.name;
    const fileExtension = item.file.name.substr(item.file.name.lastIndexOf('.') + 1);
    const uploadPath = `${this.path}/${fileName}.${fileExtension}`;

    const upload = this.fireStorage.upload(uploadPath, item.file);
    const fileRef = this.fireStorage.ref(uploadPath);
    upload.percentageChanges().subscribe(percent => {
      // this.msg.success('Upload pending ' + Math.trunc(percent) + '%');
      item.onProgress({ percent: Math.trunc(percent) }, item.file)
      this.progressChanged.emit(Math.trunc(percent))
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
