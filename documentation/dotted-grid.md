Add a subtle dotted pattern to any element using theme-aware utility classes. Dots are rendered using `radial-gradient` and spaced every 10×10px.


### Class Reference

| Class                           | Description                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------- |
| `.dotted-[color]`               | Applies a default dotted pattern in the specified color (same in both modes) |
| `.dotted-[color]-[shade]`       | Use a specific shade of a color for both light and dark modes                |
| `.light:dotted-[color]`         | Dotted background visible only in light mode                                 |
| `.dark:dotted-[color]`          | Dotted background visible only in dark mode                                  |
| `.light:dotted-[color]-[shade]` | Light mode only with specific shade                                          |
| `.dark:dotted-[color]-[shade]`  | Dark mode only with specific shade                                           |


### Examples

<div class="w-fit mt-5 dotted-pink p-4">
  Pink dots
</div>


```html
<div class="dotted-pink">
  Pink dots
</div>
```

<div class="w-fit mt-5 dotted-green-300 p-4">
  Dots with green-300
</div>

```html
<div class="dotted-green-300">
  Dots with green-300
</div>
```
<div class="w-fit mt-5 light:dotted-pink-200 dark:dotted-blue-700 p-4">
  Theme-responsive dotted background
</div>

```html
<div class="light:dotted-pink-200 dark:dotted-blue-700">
  Theme-responsive dotted background
</div>
```

<div class="w-fit mt-5 bg-red-800 dotted-orange-700 rounded color-white p-4">
  Combine background and dotted grid
</div>

```html
<div class=" bg-red-800 dotted-orange-500">
  Combine background and dotted grid
</div>
```
### Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Yellow**  | `dotted-yellow` | <span class="px-7 dotted-yellow">Color Example</span> |
| **Orange**  | `dotted-orange` | <span class="px-7 dotted-orange">Color Example</span> |
| **Red**     | `dotted-red`    | <span class="px-7 dotted-red">Color Example</span> |
| **Pink**    | `dotted-pink`   | <span class="px-7 dotted-pink">Color Example</span> |
| **Purple**  | `dotted-purple` | <span class="px-7 dotted-purple">Color Example</span> |
| **Blue**    | `dotted-blue`   | <span class="px-7 dotted-blue">Color Example</span> |
| **Cyan**    | `dotted-cyan`   | <span class="px-7 dotted-cyan">Color Example</span> |
| **Green**   | `dotted-green`  | <span class="px-7 dotted-green">Color Example</span> |
| **White**   | `dotted-white`  | <span class="px-7 dotted-white">Color Example</span> |
| **Black**   | `dotted-black`  | <span class="px-7 dotted-black">Color Example</span> |


### Shades

Each color includes 11 shade levels, ranging from the lightest `(-50)` to the darkest `(-950)`. Use these to fine-tune the text color of elements.



#### Red Shade Examples

| Shade | CSS Class | Output |
| --- | --- | --- |
| **50**  | `dotted-red-50`   | <span class="w-128px d-block text-center monospace rounded dotted-red-50 ">50</span> |
| **100** | `dotted-red-100`  | <span class="w-128px d-block text-center monospace rounded dotted-red-100">100</span> |
| **200** | `dotted-red-200`  | <span class="w-128px d-block text-center monospace rounded dotted-red-200">200</span> |
| **300** | `dotted-red-300`  | <span class="w-128px d-block text-center monospace rounded dotted-red-300">300</span> |
| **400** | `dotted-red-400`  | <span class="w-128px d-block text-center monospace rounded dotted-red-400">400</span> |
| **500** | `dotted-red-500`  | <span class="w-128px d-block text-center monospace rounded dotted-red-500">500</span> |
| **600** | `dotted-red-600`  | <span class="w-128px d-block text-center monospace rounded dotted-red-600">600</span> |
| **700** | `dotted-red-700`  | <span class="w-128px d-block text-center monospace rounded dotted-red-700">700</span> |
| **800** | `dotted-red-800`  | <span class="w-128px d-block text-center monospace rounded dotted-red-800">800</span> |
| **900** | `dotted-red-900`  | <span class="w-128px d-block text-center monospace rounded dotted-red-900">900</span> |
| **950** | `dotted-red-950`  | <span class="w-128px d-block text-center monospace rounded dotted-red-950">950</span> |

