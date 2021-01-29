import { text, number, boolean } from '@storybook/addon-knobs';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'AvatarComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: AvatarComponent,
  props: {
    photoUrl: text('photoUrl', null),
    size: number('size', 10),
  }
})