These classes allow you to **individually control the border width** on each side of an element (top, right, bottom, left), as well as horizontal (`x`) and vertical (`y`) axes. Useful for selectively applying border thickness while maintaining full design flexibility.

### Syntax

```html
<div class="border-top-3">...</div>
<div class="border-left">...</div>
<div class="border-x-0">...</div>
```


### Available Values

* `0` — Removes the border
* `1` (or none) — 1px border
* `2` to `5` — Pixel-based border thickness

`.border-[side]` is a shorthand for `.border-[side]-1`.

### Example

<div class="w-fit mt-4 px-4 py-2 stripes-black border-top-3 border-solid">Top border 3px</div>

```html
<!-- Only top border -->
<div class="border-top-3 border-solid">Top border 3px</div>
```

<div class="w-fit mt-3 px-4 py-2 stripes-black border-x-2 border-dashed">X-axis border</div>

```html
<!-- Horizontal borders (left & right) -->
<div class="border-x-2 border-dashed">X-axis border</div>
```


<div class="w-fit mt-3 px-4 py-2 stripes-black border-top-1 border-right-1">Top and right border</div>

```html
<!-- Top and right border -->
<div class="border-top-1 border-right-1">All borders except bottom</div>
```


<div class="w-fit mt-3 px-4 py-2 stripes-black border border-bottom-0">All borders except bottom</div>
```html
<!-- No bottom border -->
<div class="border border-bottom-0">All borders except bottom</div>
```





### Class Reference

#### Top Border

| Class           | Description          |
| --------------- | -------------------- |
| `.border-top-0` | No top border        |
| `.border-top`   | 1px solid top border |
| `.border-top-2` | 2px solid top border |
| `.border-top-3` | 3px solid top border |
| `.border-top-4` | 4px solid top border |
| `.border-top-5` | 5px solid top border |

#### Right Border

| Class             | Description            |
| ----------------- | ---------------------- |
| `.border-right-0` | No right border        |
| `.border-right`   | 1px solid right border |
| `.border-right-2` | 2px solid right border |
| `.border-right-3` | 3px solid right border |
| `.border-right-4` | 4px solid right border |
| `.border-right-5` | 5px solid right border |

#### Bottom Border

| Class              | Description             |
| ------------------ | ----------------------- |
| `.border-bottom-0` | No bottom border        |
| `.border-bottom`   | 1px solid bottom border |
| `.border-bottom-2` | 2px solid bottom border |
| `.border-bottom-3` | 3px solid bottom border |
| `.border-bottom-4` | 4px solid bottom border |
| `.border-bottom-5` | 5px solid bottom border |

#### Left Border

| Class            | Description           |
| ---------------- | --------------------- |
| `.border-left-0` | No left border        |
| `.border-left`   | 1px solid left border |
| `.border-left-2` | 2px solid left border |
| `.border-left-3` | 3px solid left border |
| `.border-left-4` | 4px solid left border |
| `.border-left-5` | 5px solid left border |

#### Horizontal Borders (X-Axis)

| Class         | Description                          |
| ------------- | ------------------------------------ |
| `.border-x-0` | No horizontal borders (left & right) |
| `.border-x`   | 1px solid on left and right sides    |
| `.border-x-2` | 2px solid horizontal borders         |
| `.border-x-3` | 3px solid horizontal borders         |
| `.border-x-4` | 4px solid horizontal borders         |
| `.border-x-5` | 5px solid horizontal borders         |

#### Vertical Borders (Y-Axis)

| Class         | Description                        |
| ------------- | ---------------------------------- |
| `.border-y-0` | No vertical borders (top & bottom) |
| `.border-y`   | 1px solid on top and bottom sides  |
| `.border-y-2` | 2px solid vertical borders         |
| `.border-y-3` | 3px solid vertical borders         |
| `.border-y-4` | 4px solid vertical borders         |
| `.border-y-5` | 5px solid vertical borders         |

