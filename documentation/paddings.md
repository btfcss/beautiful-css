The padding utility classes allow you to quickly apply consistent inner spacing within elements using a standardized spacing scale. All classes support responsive design with mobile-first breakpoints.

### Examples

```html
<div class="p-7">...</div>
<div class="px-0">...</div>
<div class="py-5">...</div>
<div class="pt-1">...</div>
<div class="pl-lg-3">...</div>
```

### Basic Syntax

```html
<div class="p-{value}">...</div>
<div class="px-{value}">...</div>
<div class="pt-{value}">...</div>
<div class="pl[-breakpoint]-{value}">...</div>
<!-- and so on -->
```

* `{value}`: `0` to `7`
* Direction prefixes:

  * `p`: all sides
  * `px`: left & right
  * `py`: top & bottom
  * `pt`: top
  * `pr`: right
  * `pb`: bottom
  * `pl`: left

---

### Spacing Scale

| Value | Description        |
| ----- | ------------------ |
| `0`   | `0` padding        |
| `1`   | `var(--spacing-1)` |
| `2`   | `var(--spacing-2)` |
| `3`   | `var(--spacing-3)` |
| `4`   | `var(--spacing-4)` |
| `5`   | `var(--spacing-5)` |
| `6`   | `var(--spacing-6)` |
| `7`   | `var(--spacing-7)` |

---

### Responsive Variants

Use responsive prefixes to apply different paddings at different breakpoints.

```html
<div class="p-2 p-md-4 p-lg-6">...</div>
```

| Prefix | Applies at screen width ≥ |
| ------ | ------------------------- |
| `sm`   | Small                     |
| `md`   | Middle                    |
| `lg`   | Large                     |
| `xl`   | Extra large               |
| `xxl`  | Extra extra large         |

---

### Class Reference

#### All Sides

```css
.p-{0–7}
```

#### Horizontal Paddings

```css
.px-{0–7}
```

#### Vertical Paddings

```css
.py-{0–7}
```

#### Individual Sides

```css
.pt-{0–7}    /* top */
.pr-{0–7}    /* right */
.pb-{0–7}    /* bottom */
.pl-{0–7}    /* left */
```

#### Responsive

All classes above support responsive breakpoints:

```css
.p-sm-{value}
.px-md-{value}
.pt-lg-{value}
.pl-xl-{value}
```

---

### Example

```html
<div class="p-0">No padding</div>
<div class="px-3 py-2">Custom horizontal and vertical paddings</div>
<div class="pt-4 pb-1">Top and bottom paddings</div>
<div class="p-2 p-md-5 p-xl-7">Responsive padding</div>
```

---

### Notes

* All utilities use `!important` to ensure high specificity.
* These utilities are mobile-first; larger breakpoints override smaller ones.