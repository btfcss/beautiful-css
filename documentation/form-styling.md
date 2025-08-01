### Disabled State

Use the `disabled` attribute to visually indicate that a field is not editable. Disabled inputs appear dimmed and use alternate border and placeholder colors based on the theme.

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="form-control" disabled placeholder="Disabled input">
</div>

```html
<input class="form-control" disabled placeholder="Disabled input">
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