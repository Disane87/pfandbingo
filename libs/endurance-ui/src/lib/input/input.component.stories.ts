import { text, number, boolean } from '@storybook/addon-knobs';
import { InputComponent } from './input.component';

export default {
  title: 'InputComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: InputComponent,
  props: {
    name: text('name', null),
    placeholder: text('placeholder', ''),
    value: text('value', null),
    preIcon: text('preIcon', null),
    autoComplete: text('autoComplete', 'on'),
    type: text('type', null),
    label: text('label', null),
    class: text('class', null),
    disabled: boolean('disabled', false),
  }
})