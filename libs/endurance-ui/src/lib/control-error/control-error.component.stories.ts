import { text, number, boolean } from '@storybook/addon-knobs';
import { ControlErrorComponent } from './control-error.component';

export default {
  title: 'ControlErrorComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ControlErrorComponent,
  props: {
    text: text('text', ''),
  }
})