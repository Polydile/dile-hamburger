# Moved

**This package has moved** and is now available at [@dile/ui](https://github.com/Polydile/dile-components). Please update your dependencies. This repository is no longer maintained. You can read the documentation at [Dile Components](https://dile-components.com/).

# \<dile-hamburger>

A component to show the tipical hamburger icon menu. Based on LitElement.

Has two states, opended and closed, and a boolean property "active" to define the state. This component do not responds to any user interaction by it self. The parent component has the responsability to change the state when is desired, binding the state to the "active" property, or changing it programaticaly.

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

## Customization

You can customize the icons using this CSS Custom properties;

Custom property | Description | Default
----------------|-------------|---------
--dile-hamburger-color | Icon color | #000
--dile-hamburger-active-color | Icon color | #000
--dile-hamburger-line-size | Width of the icon lines | 3px
--dile-hamburger-width | Width of the entire icon | 24px
--dile-hamburger-height | Height of the entire icon | 24px
--dile-hamburger-line-separation | Separation between lines, only in inactive state icon | -6px
