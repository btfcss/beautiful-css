Use the `.rounded-*` utility classes to control the border radius (rounded corners) of elements. These classes allow consistent spacing-based rounding or special shapes like pill borders.

### Syntax

```css
.rounded-[value]
```

Where `[value]` is a number from `0` to `7`, or `pill`.

### Available Classes

| Class           | Description                                     |
| --------------- | ----------------------------------------------- |
| `rounded-0`    | No border radius (square corners)               |
| `rounded`      | Alias for `.rounded-1`    |
| `rounded-1`    | Border radius of size 1             |
| `rounded-2`    | Border radius of size 2             |
| `rounded-3`    | Border radius of size 3             |
| `rounded-4`    | Border radius of size 4             |
| `rounded-5`    | Border radius of size 5             |
| `rounded-6`    | Border radius of size 6             |
| `rounded-7`    | Border radius of size 7             |
| `rounded-pill` | Fully rounded (pill-shaped) using `50vh` radius |



### Examples

<div class="rounded-0 w-fit mt-4 card p-4 border dark:border-grey-900 light:border-grey-100">No rounding</div>


```html
<div class="rounded-0">No rounding</div>
```


<div class="rounded-3 w-fit mt-3 card p-4 border dark:border-grey-900 light:border-grey-100">Moderate rounding</div>

```html
<div class="rounded-3">Moderate rounding</div>
```

<div class="rounded-pill w-fit mt-3 card p-4 border dark:border-grey-900 light:border-grey-100">Pill-shaped element</div>

```html
<div class="rounded-pill">Pill-shaped element</div>
```