import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import {DileHamburger} from '../dile-hamburger';
import '../dile-hamburger.js';

import readme from '../README.md';

storiesOf('dile-hamburger', module)
  .addDecorator(withKnobs)
  .add(
    'Inactive hamburguer',
    () => html`
      <dile-hamburger></dile-hamburger>
      `,
  )
  .add(
    'Active hamburguer',
    () => html`
      <dile-hamburger active></dile-hamburger>
      `,
  )
  .add(
    'Interactive',
    () => html`
      <dile-hamburger id="hamburger" @click="${
        () => {
          let ham = document.getElementById('hamburger');
          ham.active = !ham.active;
        }
      }"></dile-hamburger>
      <p>Is the same component, but we have defined a click handler to change the hamburguer state.</p>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileHamburger), { notes: { markdown: readme } })
