These utility classes help you control **vertical layout** (column-based `flex-direction`) and vertical alignment (`justify-content`) using concise and semantic class names.


#### Class Reference


| Class             | CSS Output                       | Description                    |
| ----------------- | -------------------------------- | ------------------------------ |
| `.v-flex-start`   | `justify-content: start`         | Align items to the top         |
| `.v-flex-end`     | `justify-content: end`           | Align items to the bottom      |
| `.v-flex-center`  | `justify-content: center`        | Center items vertically        |
| `.v-flex-between` | `justify-content: space-between` | Equal space between items      |
| `.v-flex-around`  | `justify-content: space-around`  | Equal space around items       |
| `.v-flex-evenly`  | `justify-content: space-evenly`  | Equal space between and around |


`v-flex` is a shorthand for `.v-flex-start`.

#### Basic Syntax

```html
<div class="v-flex-{alignment}">...</div>
```

Where `{alignment}` is one of: `start`, `end`, `center`, `between`, `around`, `evenly`.



#### Examples



<div class="mt-5 mb-0 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-start gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-start gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```



<div class="mt-5 mb-0 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-end gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-end gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```


<div class="mt-5 mb-0 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-center gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-center gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```



<div class="mt-5 mb-0 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-between gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-between gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```



<div class="mt-5 mb-0 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-around gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-around gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```



<div class="mt-5 mb-0 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-evenly gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded ">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-evenly gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Flex Grow Utilities

Control how flexible a flex item should grow relative to the rest of the items with `.grow-{n}` classes.


#### Basic Syntax

```html
<div class="grow-{n}">...</div>
```

* `{n}` is a number between `0` and `7`
* Maps to `flex-grow: n`



#### Example


<div class="mt-5 border light:hatching-grey-100 light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded v-flex-between gap-3 text-center rounded w-64px h-256px">
<div class="p-3 bg-red fit-content rounded ">01</div>
<div class="p-3 bg-red rounded grow-1">02</div>
<div class="p-3 bg-red rounded ">03</div>
</div>

``` html
<div class="v-flex-between gap-3">
  <div>01</div>
  <div class="grow-1">02</div>
  <div>03</div>
</div>
```



### Gap Utilities

The `.gap-*` utility classes let you quickly control the spacing between flex or grid items using a consistent spacing scale.

They apply the native CSS `gap` property, which works with both flex and grid containers.


#### Basic Syntax

```html
<div class="gap-{n}">...</div>
```

* `{n}` is a number between `0` and `7`


