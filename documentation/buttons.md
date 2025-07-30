Buttons styled with semantic or brand color themes. Each color button supports multiple states and modifiers like `.outline`, `.active`, `.disabled`, `.square`, and `.circular`.


### Base Class: `.btn-[color]`

<button class="btn-blue mt-5">Simple Button</button>

```html
<button class="btn-[color]">Simple Button</button>
```

### Button Color list 

| Color | CSS Class | Output |
| --- | --- | --- |
| **Yellow**  | `btn-yellow` | <button class="px-3 w-100 btn-yellow">Yellow button</button> |
| **Orange**  | `btn-orange` | <button class="px-3 w-100 btn-orange">Orange button</button> |
| **Red**     | `btn-red`    | <button class="px-3 w-100 btn-red">Red button</button> |
| **Pink**    | `btn-pink`   | <button class="px-3 w-100 btn-pink">Pink button</button> |
| **Purple**  | `btn-purple` | <button class="px-3 w-100 btn-purple">Purple button</button> |
| **Blue**    | `btn-blue`   | <button class="px-3 w-100 btn-blue">Blue button</button> |
| **Cyan**    | `btn-cyan`   | <button class="px-3 w-100 btn-cyan">Cyan button</button> |
| **Green**   | `btn-green`  | <button class="px-3 w-100 btn-green">Green button</button> |
| **White**   | `btn-white`  | <button class="px-3 w-100 btn-white">White button</button> |
| **Black**   | `btn-black`  | <button class="px-3 w-100 btn-black">Black button</button> |


### Custom Color

You can customize button colors using utility classes by combining `.btn` with background color utilities like `.bg-[color]-[shade]` and `.hover:bg-[color]-[shade]`.

<button class="btn bg-blue-300 hover:bg-blue-400 mt-4 text-black">Light Blue Button</button>

```html
<button class="btn bg-blue-300 hover:bg-blue-400">Simple Button</button>
```


## Button Sizes

Use size utility classes to adjust the button's font size and padding. These classes can be combined with any `.btn` variant.

<div class="h-flex-start gap-3 mt-4">
<button class="btn-xs h-fit btn-purple">Extra Small</button>
<button class="btn-sm btn-purple">Small</button>
<button class="btn-purple">Standard</button>
<button class="btn-lg btn-purple">Large</button>
<button class="btn-xl btn-purple">Extra Large</button>
</div>

| Class     | Description |
| --------- | ---------- |
| `.btn-xs` | Extra small  |
| `.btn-sm` | Small |
| `.btn-lg` | Large |
| `.btn-xl` | Extra large  |


<button class="btn-xs btn-purple mt-4">Extra Small Button</button>

```html
<button class="btn-xs btn-purple">Extra Small Button</button>
```

If no size class is specified, the button uses the default `.btn` size.



### Button Styles


Customize the shape of buttons using utility classes that control their border radius and proportions.

#### Rounded Pill

`.rounded-pill` Creates a pill-shaped button with fully rounded ends. Ideal for badges, tags, or soft, rounded UI.

<button class="btn-orange rounded-pill mt-4">.rounded-pill</button>

```html
<button class="btn-orange rounded-pill">.rounded-pill</button>
```

#### Circular Button

`.btn-circular` creates a perfectly circular button, typically used for icons or floating action buttons (FAB). Ensures a 1:1 aspect ratio.

<button class="btn-orange btn-circular mt-4">+</button>

```html
<button class="btn-orange btn-circular">+</button>
```

### Square Button

`.btn-square` creates a square button by forcing a 1:1 aspect ratio. Useful for tool buttons or grid layouts.

<button class="btn-orange btn-square fs-4xl">≡</button>

```html
<button class="btn-orange btn-square">≡</button>
```

### Disabled State

The `:disabled` pseudo-class visually indicates that the button is not interactive. Disabled buttons:

* Appear faded or desaturated to signal inactivity.
* Use `cursor: not-allowed` to reinforce their disabled state.
* Ignore hover, focus, and active styles.


<button class="btn-blue" disabled>Disabled</button>

```html
<button class="btn-blue" disabled>Disabled</button>
```


Here’s a clear and useful description for the **active** state section in your button documentation:

---

### Active State

The `.active` class visually indicates that the button is currently selected, pressed, or toggled. It is useful for:

* Toggle buttons (on/off states)
* Multi-button selections
* Navigation highlights

<button class="btn btn-blue active mt-4">Active</button>

```html
<button class="btn btn-blue active">Active</button>
```

Note: Make sure the button is **not disabled**, as `:disabled` takes precedence over `.active`.



