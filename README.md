# Alpine Splide

The [Alpine](https://github.com/alpinejs/alpine) component for the [Splide](https://github.com/Splidejs/splide) slider/carousel.

[Splide JS](https://splidejs.com) | [Demo](https://codepen.io/accudio/pen/RwLxZgr) | [Alpine JS](https://alpinejs.dev/)

***

## Installation

There are three recommended methods of loading Alpine Splide. Adding a `script` tag with a [CDN](#cdn), importing it into your bundle with [npm](#npm), [importing with `script type="module"`](#module-script), or adding a `script` tag with a [CDN](#cdn).
You could also download `src/js/components/Splide.js` and include it directly into your project.

Which method you use will depend on how you prefer to use and import Alpine.js.

Make sure to also [include Splide CSS](https://splidejs.com/guides/getting-started/#importing-css) via your preferred method.

### CDN (easy)

If you load Alpine from a CDN like [jsdelivr](https://www.jsdelivr.com/package/npm/alpine-splide) or [unpkg](https://unpkg.com/alpine-splide) with a script tag you can load Alpine Splide via the same method:
```html
<script src="https://unpkg.com/alpine-splide@1.x.x/dist/js/alpine-splide.script.js"></script>
<script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

When loading via this method you need to make sure that Alpine Splide loads first. This is generally done by including the `script` tag for Alpine Splide *before* Alpine. Watch out for using `type="module"` or `async`.

See [usage](#usage) for markup and usage information.

### npm

Install from [npm](https://www.npmjs.com/package/alpine-splide) with:
```
npm install alpine-splide
```

Import it into your bundle alongside Alpine and register it with `Alpine.data()`:
```js
import Alpine from 'alpinejs'
import Splide from 'alpine-splide'

Alpine.data('Splide', Splide)

Alpine.start()
```

### Module Script

You can use [skypack](https://www.skypack.dev/) to import using ES Modules similar to above like so:

```js
import Alpine from 'https://cdn.skypack.dev/alpinejs';
import Splide from 'https://cdn.skypack.dev/alpine-splide'

Alpine.data('Splide', Splide)

Alpine.start()
```

***

## Usage

Basic usage:
```html
<div class="splide" x-data="Splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
  </div>
</div>
```

Providing options to splide and using the `buildMarkup` option to simplify source markup:
```html
<div x-data="Splide({
  buildMarkup: true,
  options: {
    type: 'loop',
    perPage: 3
  }
})">
  <li>...</li>
  <li>...</li>
  <li>...</li>
</div>
```

### Advanced

For advanced usage you can declare `x-data="Splide"` further up the DOM tree from the actual slider element by adding `x-ref="slider"` on the slider element.

The suggested method of extending Alpine Splide is by copying the source and modifying it to your requirements. You can however also destructure the `Splide` component into a different `x-data` object, call `splideInit()` manually and work with `this.splide`:

```html
<div x-data="{
  ...Splide(),
  init() {
    this.splideInit()
    console.log(this.splide)
  }
}">
```

## Options

### `options`

[Splide options](https://splidejs.com/guides/options/) provided as an object:

```html
<div x-data="Splide({
  options: {
    type: 'loop',
    perPage: 5
  }
})"></div>
```

### `buildMarkup`

Allows you to skip building Splide DOM structure (`splide__track`, `splide__list`) and it will instead be built for you. Default `false`.

Simply provide slides as elements directly within the `x-data="Splide"` element.

## License and Credits

Alpine Splide and Splide are released under the MIT license. Splide code and trademarks remain with the original author Naotoshi Fujita.

Alpine Splide - © 2021 Alistair Shepherd

Splide - © 2021 Naotoshi Fujita
