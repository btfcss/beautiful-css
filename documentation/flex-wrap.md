The `flex-wrap` utility controls whether flex items are forced onto a single line or can wrap onto multiple lines, and if wrapping occurs, in which direction.

By default, flex items will **not wrap** and try to fit in a single row.


### Classes

| Class                | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `.flex-nowrap`       | Prevents items from wrapping. All flex items stay in a single line.       |
| `.flex-wrap`         | Allows items to wrap onto multiple lines, from top to bottom.             |
| `.flex-wrap-reverse` | Allows items to wrap onto multiple lines, but in reverse (bottom to top). |


### Examples

#### No Wrap (Default)

<div class="w-max-256px border light:hatching-grey-100 flex-nowrap overflow-hidden light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded h-flex-start gap-4 rounded monospace mt-5 mb-3">
<div class="p-3 w-min-96px bg-red rounded">01</div>
<div class="p-3 w-min-96px bg-red rounded">02</div>
<div class="p-3 w-min-96px bg-red rounded">03</div>
</div>

```html
<div class="h-flex-start flex-nowrap gap-4">
  <div class="bg-red">01</div>
  <div class="bg-red">02</div>
  <div class="bg-red">03</div>
</div>
```

Items stay in a **single row**, overflowing if there is not enough space.

#### Wrap


<div class="w-max-256px border light:hatching-grey-100 flex-wrap light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded h-flex-start gap-4 rounded monospace mt-5 mb-3">
<div class="p-3 w-min-96px bg-red rounded">01</div>
<div class="p-3 w-min-96px bg-red rounded">02</div>
<div class="p-3 w-min-96px bg-red rounded">03</div>
</div>


```html
<div class="h-flex-start flex-wrap gap-4">
  <div class="bg-red">01</div>
  <div class="bg-red">02</div>
  <div class="bg-red">03</div>
</div>
```

Items will wrap onto the **next line** when there isn’t enough space.



#### Wrap Reverse


<div class="w-max-256px border light:hatching-grey-100 flex-wrap-reverse light:border-grey-100 dark:hatching-grey-900 dark:border-grey-900 rounded h-flex-start gap-4 rounded monospace mt-5 mb-3">
<div class="p-3 w-min-96px bg-red rounded">01</div>
<div class="p-3 w-min-96px bg-red rounded">02</div>
<div class="p-3 w-min-96px bg-red rounded">03</div>
</div>


```html
<div class="h-flex-start flex-wrap-reverse gap-4">
  <div class="bg-red">01</div>
  <div class="bg-red">02</div>
  <div class="bg-red">03</div>
</div>
```

Items wrap onto multiple lines but in **reverse order** (from bottom to top).

