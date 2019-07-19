# \<dile-hamburger>

A component to show the tipical hamburger icon menu. Based on LitElement. 

Has two states, opended and closed, and a boolean property "active" to define the state. This component do not responds to any interaction. The parent component has the responsability to change the state when is desired, binding the state to the "active" property, or changing it programaticaly.

The hamburger component use a smooth CSS animation when changes it's state. 

Go to [DEMOS page](https://dile-hamburger.polydile.com/).

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i dile-hamburger
```

## Usage
```html
<script type="module">
  import 'dile-hamburger/dile-hamburger.js';
</script>

<dile-hamburger></dile-hamburger>
```

## Properties

- **active**: Boolean property to set the state of the hamburger icon.