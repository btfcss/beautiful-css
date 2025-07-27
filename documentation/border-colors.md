The border color utilities allow you to apply consistent and theme-aware border colors using semantic class names. These utilities are compatible with both light and dark mode out of the box.

#### Syntax

``` css
[color-scheme]:[state]:border-[name]-[shade]
```


* `border-[name]` – Applies a base color (e.g., `border-red`, `border-blue`)
* `border-[name]-[shade]` – Uses a specific shade of the color (e.g., `border-blue-200`)
* `[color-scheme]`  – Applies the color in `light:` or `dark:` mode (e.g., `dark:border-green`)
* `[state]`– Applies the color on specific states (e.g., `hover:border-purple-600`)


The defautl border width is 0. To display the border, you have to specify the border width (`border`, `border-1`, `border-2` etc.).

#### Example


<div class="w-fit px-4 py-2 mt-4 border border-red">border-red</div>

``` html
<div class="border border-red">border-red</div>
```

<div class="w-fit px-4 py-2 border border-red-800">border-red-800</div>

```html
<div class="border border-red-800">border-red-800</div>
```

<div class="w-fit px-4 py-2 border light:border-green dark:border-orange">light:border-green dark:border-orange</div>

```html
<div class="border light:border-green dark:border-orange">light:border-green dark:border-orange</div>
```

<div class="w-fit px-4 py-2 border hover:border-yellow">hover:border-yellow</div>

```html
<div class="border hover:border-yellow">hover:border-yellow</div>
```

<div class="w-fit px-4 py-2 border light:hover:border-orange-300 dark:hover:border-purple-300">dark:hover:border-purple-300</div>

```html
<div class="border light:hover:border-orange-300 dark:hover:border-purple-300">dark:hover:border-purple-300</div>
```


### Border Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Orange**  | `border-orange` | <span class="px-3 rounded border border-orange">Border Color Example</span> |
| **Yellow**  | `border-yellow` | <span class="px-3 rounded border border-yellow">Border Color Example</span> |
| **Red**     | `border-red`    | <span class="px-3 rounded border border-red">Border Color Example</span> |
| **Pink**    | `border-pink`   | <span class="px-3 rounded border border-pink">Border Color Example</span> |
| **Purple**  | `border-purple` | <span class="px-3 rounded border border-purple">Border Color Example</span> |
| **Blue**    | `border-blue`   | <span class="px-3 rounded border border-blue">Border Color Example</span> |
| **Cyan**    | `border-cyan`   | <span class="px-3 rounded border border-cyan">Border Color Example</span> |
| **Green**   | `border-green`  | <span class="px-3 rounded border border-green">Border Color Example</span> |
| **White**   | `border-white`  | <span class="px-3 rounded border border-white">Border Color Example</span> |
| **Black**   | `border-black`  | <span class="px-3 rounded border border-black">Border Color Example</span> |


### Shades

Each color includes 11 shade levels, ranging from the lightest `(-50)` to the darkest `(-950)`. Use these to fine-tune the text color of elements.

#### Red Shade Examples

| Shade | CSS Class | Output |
| --- | --- | --- |
| **50**  | `border-red-50`   | <span class="w-128px d-block text-center monospace rounded border border-red-50 ">50</span> |
| **100** | `border-red-100`  | <span class="w-128px d-block text-center monospace rounded border border-red-100">100</span> |
| **200** | `border-red-200`  | <span class="w-128px d-block text-center monospace rounded border border-red-200">200</span> |
| **300** | `border-red-300`  | <span class="w-128px d-block text-center monospace rounded border border-red-300">300</span> |
| **400** | `border-red-400`  | <span class="w-128px d-block text-center monospace rounded border border-red-400">400</span> |
| **500** | `border-red-500`  | <span class="w-128px d-block text-center monospace rounded border border-red-500">500</span> |
| **600** | `border-red-600`  | <span class="w-128px d-block text-center monospace rounded border border-red-600">600</span> |
| **700** | `border-red-700`  | <span class="w-128px d-block text-center monospace rounded border border-red-700">700</span> |
| **800** | `border-red-800`  | <span class="w-128px d-block text-center monospace rounded border border-red-800">800</span> |
| **900** | `border-red-900`  | <span class="w-128px d-block text-center monospace rounded border border-red-900">900</span> |
| **950** | `border-red-950`  | <span class="w-128px d-block text-center monospace rounded border border-red-950">950</span> |