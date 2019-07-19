import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import {DileHamburger} from '../dile-hamburger';
import '../dile-hamburger.js';

import readme from '../README.md';

storiesOf('dile-hamburger', module)
  .addDecorator(withKnobs)
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
  .add(
    'Inactive hamburguer',
    () => html`
      <dile-hamburger></dile-hamburger>
      <p>This instance only shows the inactive hamburguer state. Has no user interaction.</p>
      `,
  )
  .add(
    'Active hamburguer',
    () => html`
      <dile-hamburger active></dile-hamburger>
      <p>This instance only shows the active hamburguer state. Has no user interaction.</p>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileHamburger), { notes: { markdown: readme } })
