Input groups combine text inputs with icons, buttons, or labels for enhanced UI patterns such as search bars, usernames, or formatted inputs.

Wrap the content in a `.input-group` container to align form controls and addons horizontally.

### Basic Input Group

Use `.input-group-text` to prepend or append static text or symbols.

<div class="input-group w-fit mb-4 mt-2"><span class="input-group-text">@</span><input type="text" class="form-control" placeholder="Username"></div>

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>
```

### Search Bar with Buttons

Input groups can include buttons for actions like **search** or **clear**. Combine buttons and inputs inside a `.input-group` for layout.


<div class="input-group w-fit mb-4 rounded-pill"><button class="btn-grey px-3"><i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></button>
  <input type="text" class="form-control" placeholder="Search">
  <button class="btn-grey px-3"><i class="fa-solid fa-xmark"></i></button></div>

```html
<div class="input-group rounded-pill">
  <button class="btn-grey px-3">
    <img src="magnifying-glass.png">
  </button>
  <input type="text" class="form-control" placeholder="Search">
  <button class="btn-grey px-3">
    <img src="xmark.png">
  </button>
</div>
```


### Custom Themed Input Group

Use utility classes for dynamic theming. This example demonstrates:

* Pill shape via `.rounded-pill`
* Color theming using `light:` and `dark:` prefixes
* Transparent backgrounds and interactive styling on buttons

<div
class="input-group w-fit mb-4 w-100 rounded-pill dark:border-purple-700 light:border-green-300 dark:color-white-900 light:color-black-100"><button
class="btn dark:bg-purple-700 dark:hover:bg-purple-500 light:bg-green-300 light:hover:bg-green-500 px-3">
<i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
</button>
<input type="text" class="form-control bg-cyan-lighter-5" placeholder="Custom">
<button
class="btn dark:bg-purple-700 dark:hover:bg-purple-500 light:bg-green-300 light:hover:bg-green-500 px-3">
<i class="fa-solid fa-xmark"></i>
</button></div>

```html
<div
  class="input-group mb-4 rounded-pill dark:border-purple-700 light:border-green-300 dark:color-white-900 light:color-black-100">
  <button class="btn dark:bg-purple-700 dark:hover:bg-purple-500 light:bg-green-300 light:hover:bg-green-500 px-3">
    <img src="magnifying-glass.png">
  </button>
  <input type="text" class="form-control bg-cyan-lighter-5" placeholder="Custom">
  <button class="btn dark:bg-purple-700 dark:hover:bg-purple-500 light:bg-green-300 light:hover:bg-green-500 px-3">
    <img src="xmark.png">
  </button>
</div>
```



💡 Use `.rounded-pill` for a softer, modern appearance. Customize further with background, border, and icon classes to match your theme.
