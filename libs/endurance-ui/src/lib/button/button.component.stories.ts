import { text, number, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonComponent,
  props: {
    title: text('title', ''),
    loading: boolean('loading', false),
    disabled: boolean('disabled', false),
    color: text('color', 'blue'),
    type: text('type', ''),
    shadow: boolean('shadow', true),
    textColor: text('textColor', 'white'),
  }
})