Control how replaced elements like `<img>` or `<video>` should be resized to fit their container using the `object-fit` property.

### Syntax

```html
.object-[fit]
```

Where `[fit]` can be:

| Class                | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `object-contain`    | Scale the content to maintain its aspect ratio while fitting within the container.            |
| `object-cover`      | Scale the content to maintain its aspect ratio while filling the container. May crop content. |
| `object-fill`       | Stretch the content to fill the container. Aspect ratio is not preserved.                     |
| `object-none`       | Do not resize the content. It will retain its original size.                                  |
| `object-scale-down` | Scale down the content to the smallest size between `none` or `contain`.                      |


Use these classes to manage how media behaves inside fixed-size containers.




### Examples


#### Resizing to cover
Use the `object-cover` utility to resize an element's content to cover its container:

<div  class="overflow-hidden w-256px dark:hatching-grey-900 light:hatching-grey-200 border dark:border-grey-900 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/skateboard.jpg" class="h-100 w-100 object-cover"></div>

```html
<img src="image.jpg" class="h-100 w-100 object-cover">
```




#### Containing within
Use the `object-contain` utility to resize an element's content to stay contained within its container:

<div  class="overflow-hidden w-256px dark:hatching-grey-900 light:hatching-grey-200 border dark:border-grey-900 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/skateboard.jpg" class="h-100 w-100 object-contain"></div>

```html
<img src="image.jpg" class="h-100 w-100 object-contain">
```


#### Stretching to fit
Use the `object-fill` utility to stretch an element's content to fit its container:


<div  class="overflow-hidden w-256px dark:hatching-grey-900 light:hatching-grey-200 border dark:border-grey-900 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/skateboard.jpg" class="h-100 w-100 object-fill"></div>

```html
<img src="image.jpg" class="h-100 w-100 object-fill">
```



#### Scaling down
Use the `object-scale-down` utility to display an element's content at its original size but scale it down to fit its container if necessary:


<div  class="overflow-hidden w-256px dark:hatching-grey-900 light:hatching-grey-200 border dark:border-grey-900 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/skateboard-small.jpg" class="h-100 w-100 object-scale-down"></div>


```html
<img src="image.jpg" class="h-100 w-100 object-scale-down">
```



#### Using the original size

Use the `object-none` utility to display an element's content at its original size ignoring the container size:


<div  class="overflow-hidden w-256px dark:hatching-grey-900 light:hatching-grey-200 border dark:border-grey-900 light:border-grey-200 rounded ratio-16x9 mr-auto"><img src="/images/skateboard.jpg" class="h-100 w-100 object-none"></div>


```html
<img src="image.jpg" class="h-100 w-100 object-none">
```