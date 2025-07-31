The `modal` component is a dialog box that can be shown or hidden dynamically. It uses the native HTML `<dialog>` element enhanced with utility classes and data attributes for consistent behavior and styling.


---

⚠️ [Beautiful CSS](https://beautiful-css.com) provides only CSS styles. You can write your own JavaScript to manage modal interactions or use our dedicated utility library:

* [npm](https://www.npmjs.com/package/@btfcss/modal)
* [GitHub](https://github.com/btfcss/modal)


---

### HTML Structure


```html
<dialog class="modal">
  <div class="modal-content">
    <header></header>
    <div></div>
    <footer></footer>
  </div>
</dialog>
```

The modal content is structured into three elements:

* `<header>`: Contains the modal title and close button.
* `<div>`: Main content area of the modal.
* `<footer>`: Footer of the modal

`class="modal"` Applies base styling for visibility, animation, and positioning.

### Examples

#### Basic Example

This example is a starting point for building modals.

<button class="btn-green btn-lg" data-open-modal="basic-modal-example">Launch demo modal</button>
        
```html
<dialog id="my-modal" class="modal" data-scroll-to="top" data-close-modal>
  <div class="modal-content">
    <header>
      <h2 class="mt-0">Title</h2>
      <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
    </header>
    <div>
      Here is the main content
    </div>
    <footer class="align-right">
      <button class="btn-blue" data-close-modal>Close</button>
    </footer>
  </div>
</dialog>
```

#### Modal Without Animation

To disable the modal's opening and closing animations, add the `.no-animation` class to the `<dialog>` element:

<button class="btn-green btn-lg" data-open-modal="no-animation-modal">No animation</button>
        

```html
<dialog id="my-modal" class="modal no-animation" data-close-modal>
  <div class="modal-content">
    <header></header>
    <div></div>
    <footer></footer>
  </div>
</dialog>
```

#### Without Backdrop Blur

To disable the blur effect on the background when the modal is open, add the `.no-blur` class to the `<dialog>` element:

<button class="btn-green btn-lg" data-open-modal="blurred-modal">No blur</button>

```html
<dialog id="my-modal" class="modal no-blur" data-close-modal>
  <div class="modal-content">
    <header></header>
    <div></div>
    <footer></footer>
  </div>
</dialog>
```

#### Full Width Modal

This example shows a modal that spans the entire width of the viewport, while still respecting a maximum width to avoid overly wide content on large screens.


<button class="btn-green btn-lg" data-open-modal="full-width-modal">Full width</button>


```html
<dialog id="my-modal" class="modal" data-close-modal>
  <div class="modal-content w-100vw w-max-100">
    <header></header>
    <div></div>
    <footer></footer>
  </div>
</dialog>
```



#### Centered Modal

This example demonstrates a centered modal:

<button class="btn-green btn-lg" data-open-modal="centered-modal">Centered modal</button>


```html
<dialog id="my-modal" class="modal" data-close-modal>
  <div class="modal-content mx-auto">
    <header></header>
    <div></div>
    <footer></footer>
  </div>
</dialog>
```



### Attributes

The following attributes are intended to work with our dedicated library ([npm](https://www.npmjs.com/package/@btfcss/modal), [github](https://www.npmjs.com/package/@btfcss/modal)), otherwise developer have to write its own JavaScript logiccode to manage theses options :

* `id="my-modal"` – Unique identifier for targeting the modal via JavaScript.
* `data-scroll-to="top"` __(Optional)__ – When added to `<dialog>`, it automatically scrolls the modal content to the top when opened.
* `data-close-modal` –  Can be added to any element inside the modal to close it when clicked (e.g., close button, background click). When added to the `<dialog>`, it closes the modal when the user clicks outside the modal. 


#### Opening Button

Use `data-open-modal` on a button to open a specific modal:

<button class="btn-green" data-open-modal="simple-modal">Open Modal</button>

``` html
<button class="btn-green" data-open-modal="my-modal">Open Modal</button>
```

### Closing Cross

The following code creates a close button styled as a cross:


``` html
<button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
```

* `.btn-close`: – Overrides the default button style to appear as a close icon (“X”).

Use `[data-close-modal]` on buttons or overlays to allow declarative closing via JavaScript event delegation. 


### Classes
The following optional classes can be added to the `<dialog>` element to control modal behavior:

- `.no-animation`: prevent animation when opening / closing the modal
- `.no-blur`: prevent the background blur effect when the modal is opened
- `.my-auto`: center the modal verticaly in the viewport

Add `w-100vw` and `w-max-100` to `.modal-content` to create a full-width modal.

### Basic JavaScript Usage

Since the modals are based on the [HTML dialog element](https://www.npmjs.com/package/@btfcss/modal), you can control them with plain JavaScript:

```js
// Show the modal programmatically
document.getElementById('my-modal').showModal();
```

```js
// Close the modal manually
document.getElementById('my-modal').close();
```

Note: [Beautiful CSS](https://beautiful-css.com) includes open/close animations that may need to be accounted for when managing visibility manually.