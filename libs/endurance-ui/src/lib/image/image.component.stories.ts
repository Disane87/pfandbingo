import { text, number, boolean } from '@storybook/addon-knobs';
import { ImageComponent } from './image.component';

export default {
  title: 'ImageComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ImageComponent,
  props: {
    src: text('src', null),
  }
})