import { boolean, text } from '@storybook/addon-knobs';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'DropdownComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: DropdownComponent,
  props: {
    selectedItem: text('selectedItem', null),
    selectedItemKey: text('selectedItemKey', null),
    items: text('items', null),
    itemTemplate: text('itemTemplate', null),
    label: text('label', null),
    disabled: boolean('disabled', false),
    name: text('name', null),
    color: text('color', 'white'),
    textColor: text('textColor', 'gray-600'),
  }
})