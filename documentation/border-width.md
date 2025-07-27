Use the `.border-*` utility classes to control the **border width** of elements. These classes provide consistent spacing and visual weight, ranging from no border to thick borders.



### Class Reference

| Class       | CSS Output          | Description        |
| ----------- | ------------------- | ------------------ |
| `.border-0` | `border-width: 0`   | No border          |
| `.border`   | `border-width: 1px` | Default 1px border |
| `.border-1` | `border-width: 1px` | Same as `.border`  |
| `.border-2` | `border-width: 2px` | Medium thickness   |
| `.border-3` | `border-width: 3px` | Thick border       |
| `.border-4` | `border-width: 4px` | Extra thick        |
| `.border-5` | `border-width: 5px` | Maximum thickness  |

All classes include `!important` to ensure override priority.


### Examples

<div class="border-0 w-fit mt-3 px-4 py-2 stripes-black">No border</div>

```html
<!-- No border -->
<div class="border-0">No border</div>
```

<div class="border w-fit px-4 py-2 rounded-3 stripes-black">1 pixel border</div>

```html
<!-- Default border -->
<div class="border">1px border</div>
```

<div class="border-4 w-fit px-4 py-2 rounded-3 stripes-black">Thick border (4 pixels)</div>

```html
<!-- Thick border -->
<div class="border-4">Thick border</div>
```



### Basic Syntax

```html
<div class="border-{n}">...</div>
```

* `{n}` ranges from `0` to `5`
* `.border` is equivalent to `.border-1`



### Notes

* These utilities apply to **all sides** of the element.
* You can combine with `border-color` and `border-style` utilities for full customization.
