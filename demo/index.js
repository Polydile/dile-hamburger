import { html, render } from 'lit-html';
import '../dile-hamburger.js';

const title = 'test';
render(html`
  <h1>dile-hamburger</h1>
  <h2>Static hamburger</h2>
  <dile-hamburger></dile-hamburger>
  <dile-hamburger active></dile-hamburger>

  <h2>Interactive hamburger</h2>
  <dile-hamburger id="hamburger" @click="${
    () => {
      let ham = document.getElementById('hamburger');
      ham.active = !ham.active;
    }
  }"></dile-hamburger>
  <p>Is the same component, but we have defined a click handler to change the hamburguer state.</p>
`, document.querySelector('#demo'));
