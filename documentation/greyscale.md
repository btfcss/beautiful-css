Use the `.greyscale-[value]` utilities to apply a grayscale filter to an element. This is useful for desaturating images, icons, or backgrounds for stylistic or accessibility purposes.


### Syntax

```html
.greyscale-[value]
```

This sets:

```css
filter: grayscale([value]);
```

You can also apply these effects on hover using:

```html
.hover:greyscale-[value]
```

Which sets the filter on hover only.

### Example


<img class="w-max-500px mt-4 rounded greyscale-50 hover:greyscale-0" src="/images/color-image.jpg">


```html
<img class="greyscale-50 hover:greyscale-0" src="image.jpg">
```

This example shows a fully grayscale image that returns to color on hover.




### Available Classes

| Class Name       | CSS Output                 | Description                     |
| ---------------- | -------------------------- | ------------------------------- |
| `.greyscale-0`   | `filter: grayscale(0);`    | No grayscale (original)         |
| `.greyscale-25`  | `filter: grayscale(0.25);` | 25% grayscale                   |
| `.greyscale-50`  | `filter: grayscale(0.50);` | 50% grayscale                   |
| `.greyscale-75`  | `filter: grayscale(0.75);` | 75% grayscale                   |
| `.greyscale-100` | `filter: grayscale(1);`    | Fully grayscale (black & white) |


### Hover Variants

| Class Name             | Effect on Hover               |
| ---------------------- | ----------------------------- |
| `.hover:greyscale-0`   | Remove grayscale on hover     |
| `.hover:greyscale-25`  | Apply 25% grayscale on hover  |
| `.hover:greyscale-50`  | Apply 50% grayscale on hover  |
| `.hover:greyscale-75`  | Apply 75% grayscale on hover  |
| `.hover:greyscale-100` | Apply full grayscale on hover |



### Notes

* Grayscale filters work on any element, but are most commonly used on images and backgrounds.
* For hover effects to be smooth, combine with `.transition` and `.duration-*` utilities.
