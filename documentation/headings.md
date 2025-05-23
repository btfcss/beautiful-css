
The **Headings** module provides consistent, responsive typography styles for HTML headings (`<h1>` through `<h6>`) and corresponding utility classes (`.h1` through `.h6`). These styles scale fluidly based on the viewport width, ensuring readability across devices while maintaining visual hierarchy and aesthetic balance.


### Features

* **Fluid typography** based on viewport width using CSS `calc()`
* **Semantic defaults**: Styles apply to native heading elements (`<h1>`–`<h6>`)
* **Utility classes**: Equivalent `.h1`–`.h6` classes for non-semantic usage
* **Automatic color theming**: Uses the `light-dark()` function for theme responsiveness (light/dark mode)



### Usage

#### Semantic Elements

```html
<h1>Main Heading</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4>Minor Heading</h4>
<h5>Detail Heading</h5>
<h6>Smallest Heading</h6>
```

### Utility Classes

```html
<div class="h1">Main Heading</div>
<div class="h2">Section Title</div>
<div class="h3">Subsection</div>
<div class="h4">Minor Heading</div>
<div class="h5">Detail Heading</div>
<div class="h6">Smallest Heading</div>
```

Use `.h1`–`.h6` when you want the heading styles without semantic HTML.

