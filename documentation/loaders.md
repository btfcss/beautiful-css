The framework provides different loader styles, each animated with CSS. They can be customized with size, color, scaling, and animation speed utilities.


### Circular Spinner

`.loader` creates a **circular spinner** that rotates a bordered ring.

- Use `.color-*` to set the primary stroke color.
- Use `.border-color-*` to set the background stroke color.

#### Examples

<div class="h-flex-start gap-3 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader color-orange place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader color-red border-pink place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader color-green border-transparent place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader color-transparent border-cyan place-self-center"></span></div>
</div>


```html
<span class="loader"></span>
<span class="loader color-orange"></span>
<span class="loader color-red border-pink"></span>
<span class="loader color-green border-transparent"></span>
<span class="loader color-transparent border-cyan"></span>
```







### Clipped Border Spinner

`.loader-clip` creates a **clipped border spinner** that animates as a rotating arc.

- Use `.color-*` to change the spinner color.

#### Examples

<div class="h-flex-start gap-3 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader-clip place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-clip color-red  place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-clip color-green animation-duration-2000 place-self-center"></span></div>
</div>


```html
<span class="loader-clip"></span>
<span class="loader-clip color-red"></span>
<span class="loader-clip color-green animation-duration-2000"></span>
```



### Pulsing Loader

`.loader-grow` creates a **pulsing loader** that expands and fades in/out.

- Use `.bg-*` to set the fill color.

#### Examples

<div class="h-flex-start gap-3 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader-grow place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-grow bg-red  place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-grow bg-green animation-duration-2000 place-self-center"></span></div>
</div>

```html
<span class="loader-grow"></span>
<span class="loader-grow color-red"></span>
<span class="loader-grow color-green animation-duration-2000"></span>
```







### Fading Dots

`.loader-dots-fade` creates three **fading dots** that appear and disappear sequentially.

- Use `.color-*` to change the dots color.

#### Examples

<div class="h-flex-start gap-3 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader-dots-fade place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-dots-fade color-red  place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-dots-fade color-green animation-duration-2000 place-self-center"></span></div>
</div>

```html
<span class="loader-dots-fade"></span>
<span class="loader-dots-fade color-red"></span>
<span class="loader-dots-fade color-green animation-duration-2000"></span>
```


### Rotating Dots

`.loader-dots-spin` creates three **rotating dots** arranged in a circular path.

- Use `.color-*` to change the dots color.

#### Examples

<div class="h-flex-start gap-3 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader-dots-spin place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-dots-spin color-red  place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-dots-spin color-green animation-duration-2000 place-self-center"></span></div>
</div>

```html
<span class="loader-dots-spin"></span>
<span class="loader-dots-spin color-red"></span>
<span class="loader-dots-spin color-green animation-duration-2000"></span>
```




### Comet-Style Loader

`.comet-style` creates a **comet-style loader** where dots rotate with a trailing fade effect.

- Use `.color-*` to change the dots color.


#### Examples

<div class="h-flex-start gap-3 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader-comet place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-comet color-red  place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-comet color-green animation-duration-2000 place-self-center"></span></div>
</div>

```html
<span class="loader-comet"></span>
<span class="loader-comet color-red"></span>
<span class="loader-comet color-green animation-duration-2000"></span>
```



### Sizing

There are several ways to size the loaders. The most flexible option is to use the utility class `.scale-[ratio]`.


<div class="h-flex-start gap-4 mt-4">
<div class="w-48px h-48px h-grid"><span class="loader scale-50 place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-clip scale-75 place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-grow place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-dots-fade scale-110 place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-dots-spin scale-120 place-self-center"></span></div>
<div class="w-48px h-48px h-grid"><span class="loader-comet scale-150 place-self-center"></span></div>
</div>

``` html
<span class="loader scale-50"></span>
<span class="loader-clip scale-75"></span>
<span class="loader-grow"></span>
<span class="loader-dots-fade scale-110"></span>
<span class="loader-dots-spin scale-120"></span>
<span class="loader-comet scale-150"></span>
```

For `.loader-dots-fade`, `.loader-dots-spin` and `.loader-comet`, dots are generated with `box-shadow`. 

* The **dot size** depends on the element’s height.
* The **loader’s overall size** is relative to the element’s font size.

You can adjust both independently to fine-tune the effect:

<div class="h-flex-start gap-3 mt-4">
<div class="w-64px h-64px h-grid"><span class="loader-dots-fade fs-xs place-self-center"></span></div>
<div class="w-64px h-64px h-grid"><span class="loader-dots-spin h-16px place-self-center"></span></div>
<div class="w-64px h-64px h-grid"><span class="loader-comet fs-5xl h-4px place-self-center"></span></div>
</div>

```html
<span class="loader-dots-fade fs-xs"></span>
<span class="loader-dots-spin h-16px"></span>
<span class="loader-comet fs-5xl h-4px"></span>
```