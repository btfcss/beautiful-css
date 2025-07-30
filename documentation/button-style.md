Customize the shape of buttons using utility classes that control their border radius and proportions.

### Rounded Pill

`.rounded-pill` Creates a pill-shaped button with fully rounded ends. Ideal for badges, tags, or soft, rounded UI.

<button class="btn-pink rounded-pill mt-4">.rounded-pill</button>

```html
<button class="btn-pink rounded-pill">.rounded-pill</button>
```

### Circular Button

`.btn-circular` creates a perfectly circular button, typically used for icons or floating action buttons (FAB). Ensures a 1:1 aspect ratio.

<button class="btn-pink btn-circular mt-4">+</button>

```html
<button class="btn-pink btn-circular">+</button>
```

### Square Button

`.btn-square` creates a square button by forcing a 1:1 aspect ratio. Useful for tool buttons or grid layouts.

<button class="btn-pink btn-square fs-4xl">≡</button>

```html
<button class="btn-pink btn-square">≡</button>
```

### Borders

Combine the `.btn` classes with `.border-[side]-[width]` to specify the border size on each side :

<button class="btn-pink border-5 border-purple-800 mt-4">Borders</button>

```html
<button class="btn-pink border-5 border-purple-800 ">Borders</button>
```


<button class="btn-pink border-top-5  border-purple-800 mt-4">Top Border</button>

```html
<button class="btn-pink border-top-5 border-purple-800">Top Border</button>
```

<button class="btn-pink border-5 border-top-0  border-purple-800 mt-4">No border on top</button>

```html
<button class="btn-pink border-5 border-top-0 border-purple-800">No border on top</button>
```