Use the vertical grid system to build flexible, responsive layouts with a set number of rows. These utilities allow you to quickly create multi-rows layouts and control how wide elements span across the grid.


### Grid Rows

Use `.v-grid-N` to define a grid with a fixed number of rows.

| Class        | Description              |
| ------------ | ------------------------ |
| `.v-grid`    | Creates an auto-fitting row grid  |
| `.v-grid-2`  | Creates a 2-row grid  |
| `.v-grid-3`  | Creates a 3-row grid  |
| `.v-grid-4`  | Creates a 4-row grid  |
| `.v-grid-5`  | Creates a 5-row grid  |
| `.v-grid-6`  | Creates a 6-row grid  |
| `.v-grid-7`  | Creates a 7-row grid  |
| `.v-grid-8`  | Creates a 8-row grid  |
| `.v-grid-9`  | Creates a 9-row grid  |
| `.v-grid-10` | Creates a 10-row grid |
| `.v-grid-11` | Creates a 11-row grid |
| `.v-grid-12` | Creates a 12-row grid |

#### Examples

<div
  class="border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-grid gap-3 rounded monospace mt-3 mb-5 text-center">
  <div class="p-3 bg-red rounded">01</div>
  <div class="p-3 bg-red rounded">02</div>
  <div class="p-3 bg-red rounded">03</div>
  <div class="p-3 bg-red rounded">04</div>
</div>


```html
<div class="v-grid gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

<div
  class="border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-grid-3 gap-3 rounded monospace mt-3 mb-5 text-center">
  <div class="p-3 bg-red rounded">01</div>
  <div class="p-3 bg-red rounded">02</div>
  <div class="p-3 bg-red rounded">03</div>
  <div class="p-3 bg-red rounded">04</div>
  <div class="p-3 bg-red rounded">05</div>  
  <div class="p-3 bg-red rounded">06</div>
  <div class="p-3 bg-red rounded">07</div>
</div>


```html
<div class="v-grid-3 gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
</div>
```
### Row Spanning

Use `.v-span-X` on grid items to make them span multiple rows.

| Class       | Description    |
| ----------- | -------------- |
| `.v-span-2` | Span 2 rows |
| `.v-span-3` | Span 3 rows |
| `.v-span-4` | Span 4 rows |
| `.v-span-5` | Span 5 rows |
| `.v-span-6` | Span 6 rows |


#### Example

<div
  class="border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-grid-6 gap-3 rounded monospace mt-3 mb-5 text-center">
  <div class="p-3 bg-red rounded v-span-2">01</div>
  <div class="p-3 bg-red rounded">02</div>
  <div class="p-3 bg-red rounded">03</div>
  <div class="p-3 bg-red rounded">04</div>  
</div>

```html
<div class="v-grid-3 gap-3">
  <div class="v-span-2">01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>  
</div>
```

This creates a 3-row grid where the first item spans 2 rows.



### Column Spanning

Use `.h-span-X` on grid items to make them span multiple columns.

| Class       | Description    |
| ----------- | -------------- |
| `.h-span-2` | Span 2 columns |
| `.h-span-3` | Span 3 columns |
| `.h-span-4` | Span 4 columns |
| `.h-span-5` | Span 5 columns |
| `.h-span-6` | Span 6 columns |


#### Example

<div
  class="border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-grid-3 gap-3 rounded monospace mt-3 mb-5 text-center">
  <div class="p-3 bg-red rounded">01</div>
  <div class="p-3 bg-red rounded h-span-2">02</div>
  <div class="p-3 bg-red rounded">03</div>
  <div class="p-3 bg-red rounded">04</div>
</div>

```html
<div
  class="v-grid-6 gap-3">
  <div>01</div>
  <div class="h-span-2">02</div>
  <div>03</div>
  <div>04</div>
</div>
```

This creates a 6-row grid where the second item spans 2 columns.



### Gap Utilities

The `.gap-*` utility classes let you quickly control the spacing between flex or grid items using a consistent spacing scale.

They apply the native CSS `gap` property, which works with both flex and grid containers.


#### Basic Syntax

```html
<div class="gap-{n}">...</div>
```

* `{n}` is a number between `0` and `7`