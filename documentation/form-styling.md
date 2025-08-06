### Disabled State

Use the `disabled` attribute to visually indicate that a field is not editable. Disabled inputs appear dimmed and use alternate border and placeholder colors based on the theme.

<div class="w-max-md card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="form-control my-4" disabled placeholder="Disabled input"><input class="form-control" type="file" disabled>
</div>

```html
<input class="form-control" placeholder="Disabled input" disabled>
<input class="form-control" type="file" disabled>
```


### Size

You can change the font size of form controls to create smaller or larger inputs using text size utility classes like `.fs-xs` or `.fs-2xl`. These changes affect both the input’s text size and, indirectly, its overall visual footprint.

<div class="w-max-md card p-3 border dark:border-grey-900 light:border-grey-100">
<input type="text" class="form-control fs-xs p-1 my-4" placeholder="Small input">
<input type="text" class="form-control fs-2xl" placeholder="Large input">
</div>

```html
<input type="text" class="form-control fs-xs p-1" placeholder="Small input">
<input type="text" class="form-control fs-2xl" placeholder="Large input">
```

### Validation States

Add `.valid` or `.invalid` classes to style form fields based on validation.

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="mb-4 form-control valid" placeholder="Valid input">
<input class="form-control invalid" placeholder="Invalid input">
</div>


```html
<input class="form-control valid" placeholder="Valid input">
<input class="form-control invalid" placeholder="Invalid input">
```

### Rounded Pill

To give inputs a pill-shaped appearance, add the `.rounded-pill` class. This applies a large border-radius to create fully rounded edges.

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="form-control rounded-pill" placeholder="Rounded Pill Input">
</div>

```html
<input class="form-control rounded-pill" placeholder="Rounded Pill Input">
```

### Without Border

Use the `.border-0` utility to remove borders from form controls when a minimal or embedded style is desired.

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="form-control border-0" placeholder="Input without borders">
</div>

```html
<input class="form-control border-0" disabled placeholder="Input without borders">
```