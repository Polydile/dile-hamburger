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
  }"></dile-hamburger> (click on the icon)

  <p>Is the same component, but we have defined a click handler to change the hamburguer state.</p>
  
  <h2>Customized icon</h2>
  <style>
    .customized {
      --dile-hamburger-color: #3cb;
      --dile-hamburger-line-size: 6px;
      --dile-hamburger-width: 48px;
      --dile-hamburger-height: 48px;
      --dile-hamburger-line-separation: 12px;
    }
  </style>
  <dile-hamburger class="customized"></dile-hamburger> <dile-hamburger class="customized" active></dile-hamburger>
`, document.querySelector('#demo'));
