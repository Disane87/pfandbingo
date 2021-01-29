import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BehaviorSubject } from 'rxjs';
import { EnduranceFile } from './interfaces/file.interface';
export { EnduranceFile };
@Component({
  selector: 'eui-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent {
  @Input() path = '';
  @Input() fileName = '';

  @Input() fileTypes = '*';

  @Input() title = 'Werfe hier einfach ein Bild hin oder klicke zum Hochladen';

  @Input() photoUrl: string;
  @Input() disabled = false;


  @Input() multiple = false;
  @Input() directUpload = false;

  @Input() showOnlyButton = false;


  @Output() fileUploaded = new EventEmitter<string>();
  @Output() fileUpload = new EventEmitter<EnduranceFile[]>();

  @Output() progressChanged = new EventEmitter<number>();


  public filesList: EnduranceFile[] = [];

  public filesList$ = new BehaviorSubject<EnduranceFile[]>([]);


  constructor(private renderer: Renderer2) { }


  fileDropped(data: DataTransfer) {
    if (data.files) {
      this.filesChange(data.files);
    }
  }

  delete(file: EnduranceFile) {
    const deleteIndex = this.filesList.findIndex(fileListItem => fileListItem.id == file.id);
    this.filesList.splice(deleteIndex, 1);
    this.filesList$.next(this.filesList);
  }

  filesChange(files: FileList) {
    if (files.length > 0) {
      Object.values(files).forEach(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          const newFile = {
            id: Guid.create().toString(),
            file,
            inProgress: false,
            localUrl: reader.result.toString(),
            onProgress: new BehaviorSubject<number>(0),
            onSuccess: new BehaviorSubject<boolean>(false)
          };
          this.filesList.push(newFile);
          this.filesList$.next(this.filesList);
        }
      })
    }
  }

  upload(file: EnduranceFile) {
    this.fileUpload.emit([file])
  }

}
