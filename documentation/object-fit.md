Control how replaced elements like `<img>` or `<video>` should be resized to fit their container using the `object-fit` property.

### Syntax

```html
.object-[fit]
```

Where `[fit]` can be:

| Class| Alternative                | Description                                                                                   |
| --------------------| -------------------- | --------------------------------------------------------------------------------------------- |
| `object-contain` | `fit-contain`    | Scale the content to maintain its aspect ratio while fitting within the container.            |
| `object-cover` | `fit-cover`      | Scale the content to maintain its aspect ratio while filling the container. May crop content. |
| `object-fill` | `fit-fill`       | Stretch the content to fill the container. Aspect ratio is not preserved.                     |
| `object-none` | `fit-none`       | Do not resize the content. It will retain its original size.                                  |
| `object-scale-down`| `fit-scale-down` | Scale down the content to the smallest size between `none` or `contain`.                      |


Use these classes to manage how media behaves inside fixed-size containers.

The `.fit-*` classes are shorthand aliases for their corresponding `.object-*` utilities, providing an alternate, shorter syntax for controlling the `object-fit` behavior of media elements.


### Examples



#### Fit inside the container
Use `object-contain` to make the content fit entirely within the container without clipping. The aspect ratio is preserved, and empty space may appear.

<div  class="overflow-hidden w-256px dark:hatching-black-400 light:hatching-grey-200 border dark:border-black-400 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/object-fit.jpg" class="h-100 w-100 object-contain"></div>

```html
<img src="image.jpg" class="h-100 w-100 object-contain">
```


#### Cover the container

Use `object-cover` to fill the container while preserving the aspect ratio. The image will be clipped if necessary.

<div  class="overflow-hidden w-256px dark:hatching-black-400 light:hatching-grey-200 border dark:border-black-400 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/object-fit.jpg" class="h-100 w-100 object-cover"></div>

```html
<img src="image.jpg" class="h-100 w-100 object-cover">
```




#### Stretch to fill
Use `object-fill` to make the content fill the container regardless of its aspect ratio. This may distort the content.


<div  class="overflow-hidden w-256px dark:hatching-black-400 light:hatching-grey-200 border dark:border-black-400 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/object-fit.jpg" class="h-100 w-100 object-fill"></div>

```html
<img src="image.jpg" class="h-100 w-100 object-fill">
```



#### Scale down if needed
Use `object-scale-down` to display the content at its original size unless it’s too large—then it scales down to fit the container.


<div  class="overflow-hidden w-256px dark:hatching-black-400 light:hatching-grey-200 border dark:border-black-400 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/object-fit-small.jpg" class="h-100 w-100 object-scale-down"></div>


```html
<img src="image.jpg" class="h-100 w-100 object-scale-down">
```



#### Use original size only

Use `object-none` to keep the original size of the content, ignoring the container dimensions. It may overflow if the content is larger.


<div  class="overflow-hidden w-256px dark:hatching-black-400 light:hatching-grey-200 border dark:border-black-400 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/object-fit.jpg" class="h-100 w-100 object-none"></div>


```html
<img src="image.jpg" class="h-100 w-100 object-none">
```