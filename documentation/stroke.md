Use stroke width utilities to control the thickness of text outlines. 

### Syntax

```html
.stroke-width-[value]
```

Where `[value]` can be a spacing-based scale or fixed pixel value.

```html
.stroke-[color-name]
```

Where `[color-name]` refers to any available color defined in your design system (e.g., `red`, `blue-500`, `black-950`, etc.).




### Examples


<div class="bold fs-3xl color-grey stroke-red stroke-width-1 mt-4">Red strokes</div>

```html
<div class="bold fs-3xl color-grey stroke-red stroke-width-1">Red strokes</div>
```

<div class="bold fs-6xl color-grey stroke-blue stroke-width-3 mt-3">Big strokes</div>

```html
<div class="bold fs-6xl color-grey stroke-blue stroke-width-3">Big strokes</div>
```


### Available Stroke Widths

#### Spacing-Based Widths

These values use your framework’s spacing scale:

| Class             | Description             |
| ----------------- | ----------------------- |
| `.stroke-width-0` | No stroke               |
| `.stroke-width-1` | Thin stroke             |
| `.stroke-width-2` | Slightly thicker stroke |
| `.stroke-width-3` | Moderate stroke         |
| `.stroke-width-4` | Bold stroke             |
| `.stroke-width-5` | Thicker stroke          |
| `.stroke-width-6` | Very thick stroke       |
| `.stroke-width-7` | Maximum stroke          |

#### Pixel-Based Widths

For exact control using fixed units:

| Class               |  Description    |
| ------------------- |  -------------- |
| `.stroke-width-1px` |  1 pixel stroke |
| `.stroke-width-2px` |  2 pixel stroke |
| `.stroke-width-3px` |  3 pixel stroke |
| `.stroke-width-4px` |  4 pixel stroke |
| `.stroke-width-5px` |  5 pixel stroke |


