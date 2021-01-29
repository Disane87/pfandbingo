import { text, number, boolean } from '@storybook/addon-knobs';
import { ImageUploadComponent } from './image-upload.component';

export default {
  title: 'ImageUploadComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ImageUploadComponent,
  props: {
    path: text('path', ''),
    fileName: text('fileName', ''),
    fileTypes: text('fileTypes', '*'),
    title: text('title', 'Werfe hier einfach ein Bild hin oder klicke zum Hochladen'),
    photoUrl: text('photoUrl', ''),
    disabled: boolean('disabled', false),
    multiple: boolean('multiple', false),
    directUpload: boolean('directUpload', false),
    showOnlyButton: boolean('showOnlyButton', false),
  }
})