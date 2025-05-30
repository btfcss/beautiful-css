### Text Colors utilities

Use text color utility classes to control the color of text elements. These classes follow a clear pattern and support responsive and state-based variants.

#### Syntax

``` css
[color-scheme]:[state]:color-[name]-[shade]
```


* `color-[name]` – Applies a base color (e.g., `color-red`, `color-blue`)
* `color-[name]-[shade]` – Uses a specific shade of the color (e.g., `color-blue-200`)
* `[color-scheme]`  – Applies the color in light or dark mode (e.g., `dark:color-green`)
* `[state]`– Applies the color on specific states (e.g., `hover:color-purple-600`)


#### Example

``` html
<p class="color-red">This is red.</p>
<p class="color-blue-200">This is light blue.</p>
<p class="light:color-green">Green in light mode.</p>
<p class="dark:hover:color-purple-300">Purple on hover in dark mode.</p>
```

#### Output

<p class="color-red">This is red.</p>
<p class="color-blue-200">This is light blue.</p>
<p class="light:color-green">Green in light mode.</p>
<p class="dark:hover:color-purple-300">Purple on hover in dark mode.</p>

#### Notes

* Use color shades like `-100`, `-200`, `-300`, etc., for finer control.
* Variants like `light:` and `dark:` enable theme-specific styling.
* State variants (`hover:`, `focus:`, etc.) can be combined with theme variants for precise interactivity.

--- 

### Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Yellow** | `color-yellow` | <span class="color-yellow">Color Example</span> |
| **Orange** | `color-orange` | <span class="color-orange">Color Example</span> |
| **Red** | `color-red` | <span class="color-red">Color Example</span> |
| **Pink** | `color-pink` | <span class="color-pink">Color Example</span> |
| **Purple** | `color-purple` | <span class="color-purple">Color Example</span> |
| **Blue** | `color-blue` | <span class="color-blue">Color Example</span> |
| **Cyan** | `color-cyan` | <span class="color-cyan">Color Example</span> |
| **Green** | `color-green` | <span class="color-green">Color Example</span> |
| **White** | `color-white` | <span class="color-white">Color Example</span> |
| **Black** | `color-black` | <span class="color-black">Color Example</span> |

---

### Variation


Each color includes 11 shade levels, ranging from the lightest `(-50)` to the darkest `(-950)`. Use these to fine-tune the text color of elements.

#### Blue Shade Examples

| Variation | CSS Class | Output |
| --- | --- | --- |
| **50** | `color-blue-50` | <span class="color-blue-50">50</span> |
| **100** | `color-blue-100` | <span class="color-blue-100">100</span> |
| **200** | `color-blue-200` | <span class="color-blue-200">200</span> |
| **300** | `color-blue-300` | <span class="color-blue-300">300</span> |
| **400** | `color-blue-400` | <span class="color-blue-400">400</span> |
| **500** | `color-blue-500` | <span class="color-blue-500">500</span> |
| **600** | `color-blue-600` | <span class="color-blue-600">600</span> |
| **700** | `color-blue-700` | <span class="color-blue-700">700</span> |
| **800** | `color-blue-800` | <span class="color-blue-800">800</span> |
| **900** | `color-blue-900` | <span class="color-blue-900">900</span> |
| **950** | `color-blue-950` | <span class="color-blue-950">950</span> |


#### Notes

* Use lower numbers (e.g., `-50`, `-100`) for **light text colors**.
* Use higher numbers (e.g., `-800`, `-950`) for **dark text colors**.
* Combine with mode or state variants for dynamic styles (e.g., `dark:hover:color-blue-300`).


---

### Color Scheme

You can use theme-based prefixes to apply different text colors based on the active color mode (`dark:` or `light:`).

#### Example

``` html
<p class="light:color-red dark:color-blue">Red in light mode and blue in dark mode.</p>
```

#### Output

<p class="light:color-red dark:color-blue">Red in light mode and blue in dark mode.</p>


#### Notes

* These prefixes can be combined with hover and focus states, like `dark:hover:color-green-300`.
* Omitting the prefix applies the color in all modes.

---

### Hover

Use the `hover:` prefix to apply a text color when the user hovers over an element.

#### Syntax

``` css
hover:color-[name]-[shade]
```

* Triggers the text color change **on hover**
* Can be combined with other variants like `dark:` or `light:`

#### Example

```html
<p class="hover:color-blue-500">
  Hover over this text to turn it blue.
</p>
```

#### Output

<p class="hover:color-blue-500">
  Hover over this text to turn it blue.
</p>


