These utility classes allow you to control the horizontal alignment of text content.

### Classes

| Class Name                         | Description                      | CSS Property           |
| ---------------------------------- | -------------------------------- | ---------------------- |
| `.align-left` / `.text-left`       | Aligns text to the left          | `text-align: left;`    |
| `.align-center` / `.text-center`   | Centers the text                 | `text-align: center;`  |
| `.align-right` / `.text-right`     | Aligns text to the right         | `text-align: right;`   |
| `.align-justify` / `.text-justify` | Justifies the text               | `text-align: justify;` |
| `.align-start` / `.text-start`     | Aligns text to the start of flow | `text-align: start;`   |
| `.align-end` / `.text-end`         | Aligns text to the end of flow   | `text-align: end;`     |

Use `.text-*` or `.align-*` interchangeably based on your preferred naming convention.

### Usage Example

#### Code 

```html
<p class="text-left">This text is aligned to the left.</p>
<p class="text-center">This text is centered.</p>
<p class="text-right">This text is aligned to the right.</p>
<p class="text-justify">This text is justified.</p>
<p class="text-start">This text is aligned to the start (depends on direction).</p>
<p class="text-end">This text is aligned to the end (depends on direction).</p>
```
#### Output

<p class="rounded border-1 p-2 text-left">This text is aligned to the left.</p>
<p class="rounded border-1 p-2 text-center">This text is centered.</p>
<p class="rounded border-1 p-2 text-right">This text is aligned to the right.</p>
<p class="rounded border-1 p-2 text-justify">This text is justified.</p>
<p class="rounded border-1 p-2 text-start">This text is aligned to the start (depends on direction).</p>
<p class="rounded border-1 p-2 text-end">This text is aligned to the end (depends on direction).</p>


