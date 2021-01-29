import { text, number, boolean } from '@storybook/addon-knobs';
import { ProgressComponent } from './progress.component';

export default {
  title: 'ProgressComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ProgressComponent,
  props: {
    progress: number('progress', 0),
  }
})