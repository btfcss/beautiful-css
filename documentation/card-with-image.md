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

