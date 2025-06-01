### Background Color utilities


Use background color utility classes to control the background color of elements. These classes follow a clear pattern and support responsive and state-based variants.

#### Syntax

``` css
[color-scheme]:[state]:bg-[name]-[shade]
```


* `bg-[name]` – Applies a base color (e.g., `bg-red`, `bg-blue`)
* `bg-[name]-[shade]` – Uses a specific shade of the color (e.g., `bg-blue-200`)
* `[color-scheme]`  – Applies the color in `light:` or `dark:` mode (e.g., `dark:bg-green`)
* `[state]`– Applies the color on specific states (e.g., `hover:bg-purple-600`)


#### Example

``` html
<div class="bg-red">bg-red</div>
<div class="bg-red-200">bg-red-400</div>
<div class="light:bg-green dark:bg-orange">light:bg-green dark:bg-orange</div>
<div class="hover:bg-yellow">hover:bg-yellow</div>
<div class="light:hover:bg-orange-300 dark:hover:bg-purple-300">dark:hover:bg-purple-300</div>
```

#### Output

<div class="w-fit px-4 py-2 mt-4 rounded bg-red">bg-red</div>
<div class="w-fit px-4 py-2 mt-4 rounded bg-red-400">bg-red-400</div>
<div class="w-fit px-4 py-2 mt-4 rounded light:bg-green dark:bg-orange">light:bg-green dark:bg-orange</div>
<div class="w-fit px-4 py-2 mt-4 rounded hover:bg-yellow">hover:bg-yellow</div>
<div class="w-fit px-4 py-2 mt-4 rounded light:hover:bg-orange-300 dark:hover:bg-purple-300">dark:hover:bg-purple-300</div>


### Background Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Yellow**  | `bg-yellow` | <span class="px-3 bg-yellow">Background Color Example</span> |
| **Orange**  | `bg-orange` | <span class="px-3 bg-orange">Background Color Example</span> |
| **Red**     | `bg-red`    | <span class="px-3 bg-red">Background Color Example</span> |
| **Pink**    | `bg-pink`   | <span class="px-3 bg-pink">Background Color Example</span> |
| **Purple**  | `bg-purple` | <span class="px-3 bg-purple">Background Color Example</span> |
| **Blue**    | `bg-blue`   | <span class="px-3 bg-blue">Background Color Example</span> |
| **Cyan**    | `bg-cyan`   | <span class="px-3 bg-cyan">Background Color Example</span> |
| **Green**   | `bg-green`  | <span class="px-3 bg-green">Background Color Example</span> |
| **White**   | `bg-white`  | <span class="px-3 bg-white color-black">Background Color Example</span> |
| **Black**   | `bg-black`  | <span class="px-3 bg-black">Background Color Example</span> |


### Shades

Each color includes 11 shade levels, ranging from the lightest `(-50)` to the darkest `(-950)`. Use these to fine-tune the text color of elements.

#### Red Shade Examples

| Shade | CSS Class | Output |
| --- | --- | --- |
| **50**  | `bg-red-50`   | <span class="w-128px d-block text-center monospace rounded bg-red-50  color-black">50</span> |
| **100** | `bg-red-100`  | <span class="w-128px d-block text-center monospace rounded bg-red-100 color-black">100</span> |
| **200** | `bg-red-200`  | <span class="w-128px d-block text-center monospace rounded bg-red-200 color-black">200</span> |
| **300** | `bg-red-300`  | <span class="w-128px d-block text-center monospace rounded bg-red-300 color-black">300</span> |
| **400** | `bg-red-400`  | <span class="w-128px d-block text-center monospace rounded bg-red-400 color-black">400</span> |
| **500** | `bg-red-500`  | <span class="w-128px d-block text-center monospace rounded bg-red-500">500</span> |
| **600** | `bg-red-600`  | <span class="w-128px d-block text-center monospace rounded bg-red-600">600</span> |
| **700** | `bg-red-700`  | <span class="w-128px d-block text-center monospace rounded bg-red-700">700</span> |
| **800** | `bg-red-800`  | <span class="w-128px d-block text-center monospace rounded bg-red-800">800</span> |
| **900** | `bg-red-900`  | <span class="w-128px d-block text-center monospace rounded bg-red-900">900</span> |
| **950** | `bg-red-950`  | <span class="w-128px d-block text-center monospace rounded bg-red-950">950</span> |