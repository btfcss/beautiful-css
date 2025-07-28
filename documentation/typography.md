Beautiful CSS provides a variety of typographic utilities for styling text semantically or with utility classes. Below is a reference of supported styles.

<div class="overflow-x-auto">
| Style | Example | HTML Tag  | CSS Class |
|---|---|---|---|
| **Abbreviation** | <abbr title="Abbreviation">Abbr.</abbr> |`<abbr>` | - |  
| **Bold** | <b>Bold text</b> |`<b>` | `bold` | 
| **Italic** | <i>Italic text</i> |`<i>` | `italic` | 
| **Strikethrough** | <s>Strikethrough</s> | `<s>` | `strikethrough` | 
| **Strikethrough on hover** | <span class="hover:strikethrough">Strikethrough on hover</span> | - | `hover:strikethrough` | 
| **Underline** | <u>Underline</u> |`<u>` | `underline` | 
| **Underline on hover** | <span class="hover:underline">Underline on hover</span> | - | `hover:underline` | 
| **No decoration** | <a class="no-decoration" href="#typography">Not underlined link</a> | - | `no-decoration` | 
| **No decoration on hover** | <a class="hover:no-decoration" href="#typography">Not decoration on hover</a> | - | `hover:no-decoration` | 
| **Small** | <small>Small</small> |`<small>` | `small` | 
| **Deleted** | <del>Deleted</del> |`<del>` | `deleted` | 
| **Inserted** | <ins>Deleted</ins> |`<ins>` | `inserted` | 
| **Handwritten** | <span class="handwritten">Handwritten</span> | - | `handwritten` | 
| **Keyboard** | <kbd>CTRL</kbd> | `<kbd>` | `keyboard` | 
| **Subscript** | Regular<sub>sub</sub> | `<sub>` | `subscript` | 
| **Superscript** | Regular<sup>sup</sup> | `<sub>` | `superscript` | 
| **Monospace** | <span class="monospace">Monospace</span> | - | `monospace` | 
| **Lowercase** | <span class="lowercase">LOWERCASE</span> | - | `lowercase` | 
| **Capitalize** | <span class="capitalize">capitalize</span> | - | `capitalize` | 
| **Uppercase** | <span class="uppercase">uppercase</span> | - | `uppercase` | 
</div>

### Abbreviations


Use the `<abbr>` tag with the `title` attribute to provide the full form of an abbreviation. This helps screen readers and provides a tooltip on hover:

``` html
<abbr title="Abbreviation">Abbr.</abbr>
```

### Bold Text


To emphasize text using a heavier font weight, use the `<b>` tag or the `bold` utility class:


``` html
<b>Bold text</b>
<p class="bold">Bold paragraph</p>
```

### Italic Text

To italicize text, use the `<i>` tag or the `italic` utility class:

``` html
<i>Italic text</i>
<p class="italic">Italic paragraph</p>
```

### Strikethrough


To display text with a line through it, use the `<s>` tag or the `strikethrough` class:

``` html
<s>Strikethrough text</s>
<p class="strikethrough">Strikethrough paragraph</p>
```


### Strikethrough on Hover

Apply a strikethrough only when the user hovers over the element using `hover:strikethrough`:

``` html
<span class="hover:strikethrough">Strikethrough on hover</span>
```


### Underline 

Underline text using the `<u>` tag or the `underline` class:

``` html
<u>Underlined text</u>
<p class="underline">Underlined paragraph</p>
```

### Underline on Hover 


Underline text only when the user hovers over the element using  `hover:underline`:

``` html
<p class="hover:underline">Underlined text on hover</p>
```

### No Decoration 

Use `no-decoration`  to remove underline or any other text decoration:

``` html
<a class="no-decoration" href="#">Not underlined link</a>
```

### Remove Decoration on Hover

Use  `hover:no-decoration` to remove underline on hover:


``` html
<a class="hover:no-decoration" href="#">Underline removed on hover</a>
```


### Small 
To render text in a smaller font size, use the `<small>` tag or the `small` class:


``` html
<small>Small text</small>
<p class="small">Small paragraph</p>
```


### Deleted Text

To indicate deleted or removed content, use the `<del>` tag or the `deleted` class:


``` html
<del>Deleted text</del>
<p class="deleted">Deleted paragraph</p>
```


### Inserted Text

To mark content that has been added or inserted, use the `<ins>` tag or the `inserted` class:


``` html
<ins>Inserted text</ins>
<p class="inserted">Inserted paragraph</p>
```


### Handwritten Text

To apply a handwritten or cursive style to text, use the `handwritten` utility class:


``` html
<p class="handwritten">Hanwritten paragraph</p>
```


### Keyboard Input Element

To represent keyboard input, use the semantic `<kbd>` tag or the `keyboard` utility class:

``` html
<kbd>SHIFT</kbd>
<span class="keyboard">CTRL</span>
```
> This style is typically used for inline user input references, like shortcuts or keys pressed.

### Subscript


To display subscript text (commonly used in chemical formulas or math), use the semantic `<sub>` tag or the `subscript` utility class:
``` html
X<sub>2</sub>
X<span class="subscript">2<span>
```


### Superscript

To display superscript text (commonly used in chemical formulas or math), use the semantic `<sup>` tag or the `superscript` utility class:
``` html
X<sup>3</sup>
X<span class="superscript">3<span>
```



### Superscript

To display superscript text (commonly used in chemical formulas or math), use the semantic `<sup>` tag or the `superscript` utility class:
``` html
X<sup>3</sup>
X<span class="superscript">3<span>
```




### Monospace
To apply a monospace (fixed-width) style to text, use the `monospace` utility class:
``` html
<p class="Monospace">Monospace paragraph</p>
```




### Lowercase

Converts all text to lowercase with `lowercase` utility class:

```html
<p class="lowercase">THIS WILL BECOME LOWERCASE</p>
```

### Capitalize

Capitalizes the first letter of each word with `capitalize` utility class:

```html
<p class="capitalize">this will become capitalized</p>
```

### Uppercase

Converts all text to uppercase with `uppercase` utility class:

```html
<p class="uppercase">this will become uppercase</p>
```

