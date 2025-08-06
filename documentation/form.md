Form controls are used to style and standardize common form elements such as inputs, `select`s, and `textarea`s. These utilities provide accessible, responsive, and theme-aware UI elements with support for validation, focus styling, and dark mode.

### Basic Markup

```html
<label for="example" class="form-label">Your name</label>
<input type="text" id="example" class="form-control" placeholder="Enter your name">
```

Use `.form-label` for consistent label spacing, and `.form-control` for styled form elements.


### Examples 

#### Input Text

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100"><label for="docExampleFormControlInputText" class="form-label">Text input</label><input type="text" class="form-control" id="docExampleFormControlInputText" placeholder="Default Input"></div>

```html
<label for="exampleFormControlInputText" class="form-label">Text input</label>
<input type="text" class="form-control" id="exampleFormControlInputText" placeholder="Default Input">
```

#### Password

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100"><label for="docExampleFormControlPassword" class="form-label">Password</label><input type="password" class="form-control" id="docExampleFormControlPassword" placeholder="••••••••" autocomplete="off"></div>

```html
<label for="exampleFormControlPassword" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleFormControlPassword" placeholder="••••••••" autocomplete="off">
```

#### Text Area


<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100"><label for="exampleFormControlTextarea" class="form-label">Textarea</label><textarea type="password" class="form-control" id="exampleFormControlTextarea" rows="5" placeholder="Comments"></textarea></div>

```html
<label for="exampleFormControlTextarea" class="form-label">Textarea</label>
<textarea type="password" class="form-control" id="exampleFormControlTextarea" rows="5" placeholder="Comments"></textarea>
```


### File Input

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100"><div class="mb-4"><label for="docExampleFormFile" class="form-label">File input</label><input class="form-control" type="file" id="docExampleFormFile"></div></div>

```html
<div class="mb-4">
  <label for="exampleFormFile" class="form-label">File input</label>
  <input class="form-control" type="file" id="exampleFormFile">
</div>
```


### Select Dropdowns

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100"><label for="exampleFormControlTextarea" class="form-label">Select</label><select class="form-control" aria-label="Default select example"><option selected>Select</option><option value="1">First choice</option><option value="2">Second choice</option><option value="3">Third choice</option></select></div>


```html
<label for="exampleFormControlTextarea" class="form-label">Select</label>
<select class="form-control" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">First choice</option>
  <option value="2">Second choice</option>
  <option value="3">Third choice</option>
</select>
```

### Disabled State

Use the `disabled` attribute to visually indicate that a field is not editable. Disabled inputs appear dimmed and use alternate border and placeholder colors based on the theme.

<div class="w-max-md card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="form-control my-4" disabled placeholder="Disabled input"><input class="form-control" type="file" disabled>
</div>

```html
<input class="form-control" placeholder="Disabled input" disabled>
<input class="form-control" type="file" disabled>
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


### Without Border

Add `.border-0` to remove borders from form controls:

<div class="w-max-md mt-4 card p-3 border dark:border-grey-900 light:border-grey-100">
<input class="form-control border-0" placeholder="Input without borders">
</div>

```html
<input class="form-control border-0" disabled placeholder="Input without borders">
```