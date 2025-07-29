These utilities apply diagonal striped backgrounds using a repeating linear gradient. They support light and dark mode theming.

### Usage

Apply classes prefixed with optional mode prefixes to add striped backgrounds:

* `.stripes-[color]` — Stripes background
* `.light:stripes-[color]` — Stripes background applied in light mode only
* `.dark:stripes-[color]` — Stripes background applied in dark mode only
* `.stripes-bg-[color]-[shade]` — Specify the background color and shade
* `.stripes-fg-[color]-[shade]` — Specify the foreground color and shade
* `.light:stripes-bg-[color]` — Applies the background stripe color only in light mode
* `.dark:stripes-bg-[color]` — Applies the background stripe color only in dark mode
* `.light:stripes-fg-[color]` — Applies the foreground (stripe line) color only in light mode
* `.dark:stripes-fg-[color]` — Applies the foreground (stripe line) color only in dark mode


### Examples

<div class="w-fit mt-5 stripes-red p-4">
  Striped background with default colors.
</div>


```html
<div class="stripes-red">
  Striped background with default colors.
</div>
```

<div class="w-fit mt-5 dark:stripes-blue light:stripes-orange p-4">
  Orange stripes in light mode and blue stripes in dark mode
</div>

```html
<div class="dark:stripes-blue light:stripes-orange">
  Orange stripes in light mode and blue stripes in dark mode
</div>
```

<div class="w-fit mt-5 stripes-bg-yellow stripes-fg-purple-500 p-4">
  Orange and purple stripes
</div>

```html
<div class="stripes-bg-yellow stripes-fg-purple-500">
  Orange and purple stripes
</div>
```

### Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Yellow**  | `stripes-yellow` | <span class="px-3 stripes-yellow">Color Example</span> |
| **Orange**  | `stripes-orange` | <span class="px-3 stripes-orange">Color Example</span> |
| **Red**     | `stripes-red`    | <span class="px-3 stripes-red">Color Example</span> |
| **Pink**    | `stripes-pink`   | <span class="px-3 stripes-pink">Color Example</span> |
| **Purple**  | `stripes-purple` | <span class="px-3 stripes-purple">Color Example</span> |
| **Blue**    | `stripes-blue`   | <span class="px-3 stripes-blue">Color Example</span> |
| **Cyan**    | `stripes-cyan`   | <span class="px-3 stripes-cyan">Color Example</span> |
| **Green**   | `stripes-green`  | <span class="px-3 stripes-green">Color Example</span> |
| **White**   | `stripes-white`  | <span class="px-3 stripes-white color-black">Color Example</span> |
| **Black**   | `stripes-black`  | <span class="px-3 stripes-black color-white">Color Example</span> |


### Shades

Each color includes 11 shade levels, ranging from the lightest `(-50)` to the darkest `(-950)`. Use these to fine-tune the text color of elements.



#### Red Shade Examples

| Shade | CSS Class | Output |
| --- | --- | --- |
| **50**  | `stripes-fg-red-50`   | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-50  color-black">50</span> |
| **100** | `stripes-fg-red-100`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-100 color-black">100</span> |
| **200** | `stripes-fg-red-200`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-200 color-black">200</span> |
| **300** | `stripes-fg-red-300`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-300 color-black">300</span> |
| **400** | `stripes-fg-red-400`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-400 color-black">400</span> |
| **500** | `stripes-fg-red-500`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-500">500</span> |
| **600** | `stripes-fg-red-600`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-600">600</span> |
| **700** | `stripes-fg-red-700`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-700">700</span> |
| **800** | `stripes-fg-red-800`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-800">800</span> |
| **900** | `stripes-fg-red-900`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-900">900</span> |
| **950** | `stripes-fg-red-950`  | <span class="w-128px d-block text-center monospace rounded stripes-fg-red-950">950</span> |



