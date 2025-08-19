The display utilities allow you to control the `display` property of elements, with support for hover states and responsive breakpoints.


### Basic Display

| Class             | Description             | CSS                                 |
| ----------------- | ----------------------- | ----------------------------------- |
| `.d-none`         | Hides element           | `display: none !important;`         |
| `.d-block`        | Display as block        | `display: block !important;`        |
| `.d-inline`       | Display as inline       | `display: inline !important;`       |
| `.d-inline-block` | Display as inline-block | `display: inline-block !important;` |
| `.d-flex`         | Display as flex         | `display: flex !important;`         |
| `.d-inline-flex`  | Display as inline-flex  | `display: inline-flex !important;`  |
| `.d-grid`         | Display as grid         | `display: grid !important;`         |
| `.d-table`        | Display as table        | `display: table !important;`        |
| `.d-table-row`    | Display as table-row    | `display: table-row !important;`    |
| `.d-table-cell`   | Display as table-cell   | `display: table-cell !important;`   |

#### Example
    
<div class="d-block bg-red p-2 rounded mt-4 mb-3">Block element (takes full width)</div>
<div class="d-inline-block bg-blue p-2 rounded ">Inline element (fits content)</div>
    

```html
<div class="d-block bg-red">Block element (takes full width)</div>
<div class="d-inline-block bg-blue">Inline element (fits content)</div>
```

### Responsive Variants

Available breakpoints:

* `sm` ≥ 40rem
* `md` ≥ 48rem
* `lg` ≥ 64rem
* `xl` ≥ 80rem
* `xxl` ≥ 96rem

Pattern: `.d-[breakpoint]-[value]`

| Example               | Description                                      |
| --------------------- | ------------------------------------------------ |
| `.d-sm-none`          | Hide on small screens and up                     |
| `.d-md-flex`          | Flex on medium screens and up                    |
| `.d-lg-inline`        | Inline on large screens and up                   |
| `.d-xl-grid`          | Grid on extra-large screens and up               |
| `.d-xxl-inline-block` | Inline-block on extra-extra-large screens and up |

#### Examples

<div class="bg-green p-2 d-block d-md-none rounded mt-4">Visible on <b>mobile</b></div>
<div class="bg-green p-2 d-md-block d-none rounded mt-4">Visible on <b>large display</b></div>

```html
<div class="d-block d-md-none">Visible on <b>mobile</b></div>
<div class="d-none d-md-block">Visible on <b>large display</b></div>
```


### Hover Variants

Use `hover:` prefixed classes to change display on hover.

| Class Example     | Description            |
| ----------------- | ---------------------- |
| `.hover\:d-none`  | Hides element on hover |
| `.hover\:d-block` | Block on hover         |
| `.hover\:d-flex`  | Flex on hover          |
| `.hover\:d-grid`  | Grid on hover          |

#### Example 



<div class="bg-purple p-2 d-inline-block hover:d-block rounded mt-4">Hover me</div>

```html
<div class="d-inline-block hover:d-block">Hover me</div>
```


