These utility classes help you control **vertical layout** (column-based `flex-direction`) and vertical alignment (`justify-content`) using concise and semantic class names.

<div class="h-flex-evenly">
<div>
<h3>v-flex-start</h3>
<div class="mx-auto border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-start gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>
</div>    
<div>
<h3>v-flex-end</h3>
<div class="mx-auto border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-end gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>
</div>  
<div>
<h3>v-flex-center</h3>
<div class="mx-auto border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-center gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>
</div>    
<div>
<h3>v-flex-between</h3>
<div class="mx-auto border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-between gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>
</div>  <div>
<h3>v-flex-around</h3>
<div class="mx-auto border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-around gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>
</div>  <div>
<h3>v-flex-evenly</h3>
<div class="mx-auto border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-evenly gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>
</div>  
</div>

| Class             | CSS Output                       | Description                    |
| ----------------- | -------------------------------- | ------------------------------ |
| `.v-flex-start`   | `justify-content: start`         | Align items to the top         |
| `.v-flex-end`     | `justify-content: end`           | Align items to the bottom      |
| `.v-flex-center`  | `justify-content: center`        | Center items vertically        |
| `.v-flex-between` | `justify-content: space-between` | Equal space between items      |
| `.v-flex-around`  | `justify-content: space-around`  | Equal space around items       |
| `.v-flex-evenly`  | `justify-content: space-evenly`  | Equal space between and around |





### Examples

```html
<div class="v-flex-start">...</div>
<div class="v-flex-center">...</div>
<div class="v-flex-between">...</div>
```





### Basic Syntax

```html
<div class="v-flex-{alignment}">...</div>
```



## Flex Grow Utilities

Control how flexible a flex item should grow relative to the rest of the items with `.grow-{n}` classes.


| Class     | CSS Output     |
| --------- | -------------- |
| `.grow-0` | `flex-grow: 0` |
| `.grow-1` | `flex-grow: 1` |
| `.grow-2` | `flex-grow: 2` |
| `.grow-3` | `flex-grow: 3` |
| `.grow-4` | `flex-grow: 4` |
| `.grow-5` | `flex-grow: 5` |
| `.grow-6` | `flex-grow: 6` |
| `.grow-7` | `flex-grow: 7` |


### Examples

```html
<div class="grow-1">...</div>
<div class="grow-0">...</div>
```

### Basic Syntax

```html
<div class="grow-{n}">...</div>
```

* `{n}` is a number between `0` and `7`
* Maps to `flex-grow: n`


* All utilities use `!important` if needed to override base styles.