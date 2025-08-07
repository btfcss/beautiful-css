Use `.ratio-[width]x[height]` utility classes to control the aspect ratio of an element. These classes apply the `aspect-ratio` CSS property to enforce consistent width-to-height proportions.

### Syntax

```html
.ratio-[width]x[height]
```

This sets:

```css
aspect-ratio: [width] / [height] !important;
```
### Examples

<div class="mt-4 w-128px ratio-1x1 bg-blue border rounded text-center">1:1</div>


```html
<div class="mt-4 w-128px ratio-1x1 bg-blue border rounded">1:1</div>
```

<div class="mt-4 w-128px ratio-16x9 bg-blue border rounded text-center">16:9</div>


```html
<div class="mt-4 w-128px ratio-16x9 bg-blue border rounded">16:9</div>
```

### Available Ratios

| Class Name    | CSS Output                        | Description             |
| ------------- | --------------------------------- | ----------------------- |
| `.ratio-1x1`  | `aspect-ratio: 1 / 1!important;`  | Square                  |
| `.ratio-2x1`  | `aspect-ratio: 2 / 1!important;`  | Wide rectangle          |
| `.ratio-1x2`  | `aspect-ratio: 1 / 2!important;`  | Tall rectangle          |
| `.ratio-16x9` | `aspect-ratio: 16 / 9!important;` | Standard HD video ratio |
| `.ratio-9x16` | `aspect-ratio: 9 / 16!important;` | Portrait video ratio    |



### Notes

* You can apply these classes to any block-level or flex/grid item.
* Useful for embedding videos, images, cards, or any container where aspect consistency is required.
* Combine with width utilities (`w-100`, `w-50`, etc.) to define how much horizontal space the element should take.
