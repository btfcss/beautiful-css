Use `hatching` utility classes to apply a diagonal striped pattern using a single color across light and dark modes. This pattern uses a `135deg` repeating-linear-gradient.

### Class Patterns

| Class Pattern                      | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| `.hatching-[color]`                | Sets the hatching color for both light and dark modes    |
| `.hatching-[color]-[shade]`        | Sets the hatching color shade (e.g. `hatching-blue-400`) |
| `.light\:hatching-[color]-[shade]` | Sets the hatching color for **light mode only**          |
| `.dark\:hatching-[color]-[shade]`  | Sets the hatching color for **dark mode only**           |



### Examples

<div class="w-fit mt-5 hatching-orange p-4 rounded">
  Diagonal orange hatch pattern
</div>


```html
<div class="hatching-orange">
  Diagonal orange hatch pattern
</div>
```

<div class="w-fit mt-5 light:hatching-red-200 dark:hatching-blue-700 p-4 rounded">
  Diagonal hatch pattern for adaptive theming
</div>


```html
<div class="light:hatching-red-200 dark:hatching-blue-700">
  Diagonal hatch pattern for adaptive theming
</div>
```


### Usage Notes

* The background pattern is diagonal and sized at `10px x 10px`
* Uses `--hatching-light` and `--hatching-dark` CSS variables under the hood
* Can be combined for adaptive themes, e.g. use different colors per mode


### Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Yellow**  | `hatching-yellow` | <span class="px-3 hatching-yellow">Color Example</span> |
| **Orange**  | `hatching-orange` | <span class="px-3 hatching-orange">Color Example</span> |
| **Red**     | `hatching-red`    | <span class="px-3 hatching-red">Color Example</span> |
| **Pink**    | `hatching-pink`   | <span class="px-3 hatching-pink">Color Example</span> |
| **Purple**  | `hatching-purple` | <span class="px-3 hatching-purple">Color Example</span> |
| **Blue**    | `hatching-blue`   | <span class="px-3 hatching-blue">Color Example</span> |
| **Cyan**    | `hatching-cyan`   | <span class="px-3 hatching-cyan">Color Example</span> |
| **Green**   | `hatching-green`  | <span class="px-3 hatching-green">Color Example</span> |
| **White**   | `hatching-white`  | <span class="px-3 hatching-white">Color Example</span> |
| **Black**   | `hatching-black`  | <span class="px-3 hatching-black">Color Example</span> |


### Shades

Each color includes 11 shade levels, ranging from the lightest `(-50)` to the darkest `(-950)`. Use these to fine-tune the text color of elements.



#### Red Shade Examples

| Shade | CSS Class | Output |
| --- | --- | --- |
| **50**  | `hatching-red-50`   | <span class="w-128px d-block text-center monospace rounded hatching-red-50 ">50</span> |
| **100** | `hatching-red-100`  | <span class="w-128px d-block text-center monospace rounded hatching-red-100">100</span> |
| **200** | `hatching-red-200`  | <span class="w-128px d-block text-center monospace rounded hatching-red-200">200</span> |
| **300** | `hatching-red-300`  | <span class="w-128px d-block text-center monospace rounded hatching-red-300">300</span> |
| **400** | `hatching-red-400`  | <span class="w-128px d-block text-center monospace rounded hatching-red-400">400</span> |
| **500** | `hatching-red-500`  | <span class="w-128px d-block text-center monospace rounded hatching-red-500">500</span> |
| **600** | `hatching-red-600`  | <span class="w-128px d-block text-center monospace rounded hatching-red-600">600</span> |
| **700** | `hatching-red-700`  | <span class="w-128px d-block text-center monospace rounded hatching-red-700">700</span> |
| **800** | `hatching-red-800`  | <span class="w-128px d-block text-center monospace rounded hatching-red-800">800</span> |
| **900** | `hatching-red-900`  | <span class="w-128px d-block text-center monospace rounded hatching-red-900">900</span> |
| **950** | `hatching-red-950`  | <span class="w-128px d-block text-center monospace rounded hatching-red-950">950</span> |



