The margin utility classes allow you to quickly apply consistent spacing around elements using a standardized spacing scale. All classes are built to support responsive design with mobile-first breakpoints.

### Examples

```html
<div class="m-7">...</div>
<div class="mx-auto">...</div>
<div class="mx-5">...</div>
<div class="mt-0">...</div>
<div class="mr-sm-2">...</div>
```

### Basic Syntax

```html
<div class="m-{value}">...</div>
<div class="mx-{value}">...</div>
<div class="mt-{value}">...</div>
<div class="mr[-breakpoint]-{value}">...</div>
<!-- and so on -->
```



* `{value}`: `0` to `7` or `auto`
* Direction prefixes:

  * `m`: all sides
  * `mx`: left & right
  * `my`: top & bottom
  * `mt`: top
  * `mr`: right
  * `mb`: bottom
  * `ml`: left

---

### Spacing Scale

| Value  | Description                        |
| ------ | ---------------------------------- |
| `0`    | `0` margin                         |
| `1`    | `var(--spacing-1)`                 |
| `2`    | `var(--spacing-2)`                 |
| `3`    | `var(--spacing-3)`                 |
| `4`    | `var(--spacing-4)`                 |
| `5`    | `var(--spacing-5)`                 |
| `6`    | `var(--spacing-6)`                 |
| `7`    | `var(--spacing-7)`                 |
| `auto` | `auto` margin (e.g. for centering) |

---

### Responsive Variants

Use responsive prefixes to apply different margins at different breakpoints.

```html
<div class="m-2 m-md-4 m-lg-6">...</div>
```

| Prefix | Applies at screen width ≥ |
| ------ | ------------------------- |
| `sm`   | Small                     |
| `md`   | Middle                     |
| `lg`   | Large                    |
| `xl`   | Extra large                    |
| `xxl`  | Extra extra large              |

---

### Class Reference

#### All Sides

``` css
.m-{0–7}
.m-auto
```

#### Horizontal Margins

``` css
.mx-{0–7}
.mx-auto
```

#### Vertical Margins

``` css
.my-{0–7}
.my-auto
```

#### Individual Sides

``` css
.mt-{0–7}   .mt-auto    /* top */
.mr-{0–7}   .mr-auto    /* right */
.mb-{0–7}   .mb-auto    /* bottom */
.ml-{0–7}   .ml-auto    /* left */
```

#### Responsive

For every class above, you can prefix it with a breakpoint:

``` css
.m-sm-{value}
.mx-md-{value}
.mt-lg-{value}
.ml-xl-auto
```

---

### Example

```html
<div class="m-0">No margin</div>
<div class="mx-3 my-2">Custom horizontal and vertical margins</div>
<div class="mt-4 mb-1">Top and bottom margins</div>
<div class="m-auto">Centered</div>
<div class="m-2 m-md-5 m-xl-7">Responsive margin</div>
```

---

### Notes

* All utilities use `!important` to ensure high specificity.
* These utilities are mobile-first; larger breakpoints override smaller ones.