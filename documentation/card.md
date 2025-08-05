Cards are flexible content containers that can include headers, bodies, footers, and even images. Use them to group related information in a visually distinct block.

### Basic Structure

```html
<div class="card">
  <div class="header">...</div>
  <div class="body">...</div>
  <div class="footer">...</div>
</div>
```

* `.card` – the container for the card component.
* `.header` – optional section used for titles, images, or actions.
* `.body` – main content area of the card.
* `.footer` – optional section for actions or metadata.


### Card with Multiple Headers

You can insert multiple headers within a card for complex layouts.

#### Preview

<div class="card w-256px mt-4 mb-3">
<div class="header"><h2>Card with Headers</h2></div>
<div class="body">Example of card with several <b>headers</b>.</div>
<div class="header"><h2>Another Headers</h2></div>
<div class="body">You can insert multiple <b>headers</b> in a single card.</div>
<div class="footer align-right"><button class="btn-blue" data-open-modal="documentation-modal" data-documentation="card">Do something</button></div>
</div>

```html
<div id="card" class="card">
  <div class="header"><h2>Card with Headers</h2></div>
  <div class="body">Example of card with several <b>headers</b>.</div>  
  <div class="header"><h2>Another Headers</h2></div>  
  <div class="body">You can insert multiple <b>headers</b> in a single card.</div>  
  <div class="footer align-right">
     <button class="btn-blue" data-open-modal="documentation-modal" data-documentation="card">Do something</button>
  </div>
</div>
```

* Headers can appear at multiple positions inside the card.
* Alternate headers and bodies to separate content logically.
* Use `.align-right` in the footer to align buttons to the right.


### Card with Image Header

Headers can also be replaced with an image for a more visual layout.

#### Preview

<div class="card mt-4 mb-3 w-256px">
<img class="header" src="/images/card-header.jpg">
<div class="body"><h3>Card Title</h3><p>Example of a card with an image for blog posts, user cards, and many more.</p></div>
<div class="footer align-right"><button class="btn-blue">Do something</button></div>
</div>

```html
<div class="card">
  <img class="header" src="/images/card-header.jpg">
  <div class="body">
    <h3>Card Title</h3>
    <p>Example of a card with an image for blog posts, user cards, and many more.</p>
  </div>
  <div class="footer align-right">
    <button class="btn-blue">Do something</button>
  </div>
</div>
```

* An `<img>` element with the `.header` class is used to display an image at the top.
* Ideal for use cases like blog cards, product cards, or profile previews.

