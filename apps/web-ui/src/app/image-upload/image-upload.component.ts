import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
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

  constructor(private msg: NzMessageService, private fireStorage: AngularFireStorage) { }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  customUploadReq = (item: NzUploadXHRArgs) => {

    const fileName = item.file.name;

    const upload = this.fireStorage.upload(fileName, item.file);
    const fileRef = this.fireStorage.ref(fileName);
    upload.percentageChanges().subscribe(percent => {
      // this.msg.success('Upload pending ' + Math.trunc(percent) + '%');
      item.onProgress({ percent: Math.trunc(percent) }, item.file)
    })

    const id = this.msg.loading('Uploading', { nzDuration: 0 }).messageId;

    upload.snapshotChanges().pipe(

      last(),
      tap(() => item.onSuccess('Complete', item.file, null)),
      switchMap(() => fileRef.getDownloadURL()),
      tap(downloadUrl => {
        this.msg.remove(id);
        this.msg.success(`Uploaded to ${downloadUrl}`);
      })
    ).subscribe()


    // return from(upload.then(res => {
    //   this.msg.success('Upload complete');
    // }).catch(err => {
    //   this.msg.success('Upload Error');
    // }))

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
