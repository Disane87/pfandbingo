import { text, number, boolean } from '@storybook/addon-knobs';
import { FlagComponent } from './flag.component';

export default {
  title: 'FlagComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: FlagComponent,
  props: {
    isoCode: text('isoCode', ''),
    squared: boolean('squared', true),
  }
})