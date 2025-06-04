These utility classes allow you to control the appearance and structure of lists (`<ul>` and `<ol>`) and their items.

### Base Styling

| Selector   | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `ul`, `ol` | Applies padding and vertical margin to unordered and ordered lists. |
| `li`       | Applies vertical spacing between list items.                        |


### List Style Type Classes

| Symbol | Class Name        | Description                          | CSS Property                 |
|----- | ----------------  |  ------------------------------------|---------------------------- |
| ● | `.list-disc`      | Bulleted list with filled circles | `list-style-type: disc;`     |
| ○ | `.list-circle`    | Bulleted list with hollow circles  | `list-style-type: circle;`   |
| ■ | `.list-square`    | Bulleted list with squares          | `list-style-type: square;`   |
| 1. | `.list-decimal`   | Ordered list with numbers        | `list-style-type: decimal;`  |
| ა | `.list-georgian`  | Ordered list using Georgian numerals | `list-style-type: georgian;` |
| ೧ | `.list-kannada`   | Ordered list using Kannada numerals | `list-style-type: kannada;`  |
|     | `.list-none`     |  Removes list bullets/numbers         | `list-style-type: none;`     |

### Usage Example

#### Code

```html
<ul class="list-circle">
  <li>Circle item one</li>
  <li>Circle item two</li>
</ul>

<ul class="list-square">
  <li>Square item one</li>
  <li>Square item two</li>
</ul>

<ul class="list-none">
  <li>Bullet removed</li>
  <li>No marker here</li>
</ul>
```

#### Output

<ul class="list-circle">
  <li>Circle item one</li>
  <li>Circle item two</li>
</ul>

<ol class="list-square mt-5">
  <li>Square item one</li>
  <li>Square item two</li>
</ol>

<ul class="list-none mt-5">
  <li>Bullet removed</li>
  <li>No marker here</li>
</ul>
