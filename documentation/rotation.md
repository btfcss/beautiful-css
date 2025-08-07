Control the rotation of elements using the `.rotate-*` classes. Useful for rotating icons, buttons, and other UI elements.

### Syntax

```html
.rotate-[angle]
```

Optional variants:

* `hover:rotate-[angle]`: Applies the rotation on hover.
* `transition-rotate`: Enables smooth rotation transitions.
* `duration-[time]`: Defines transition duration.


### Examples



<div class="w-fit p-3 border rounded mt-5 mb-3 rotate-180">Upside down</div>

```html
<div class="rotate-180">Upside down</div>
```


<div class="w-fit p-3 border mt-5 mb-3 rounded hover:rotate-90">Hover me</div>

```html
<div class="rotate-90">Hover me</div>
```

This rotates the icon by 90° when hovered, with a smooth 300ms transition.

### Class Reference

#### Static Rotation

| Class         | Description          |
| ------------- | -------------------- |
| `rotate-0`   | No rotation          |
| `rotate-45`  | Rotates element 45°  |
| `rotate-90`  | Rotates element 90°  |
| `rotate-135` | Rotates element 135° |
| `rotate-180` | Rotates element 180° |
| `rotate-225` | Rotates element 225° |
| `rotate-270` | Rotates element 270° |
| `rotate-315` | Rotates element 315° |

#### Hover Rotation

| Class               | Description                   |
| ------------------- | ----------------------------- |
| `hover:rotate-0`   | No rotation on hover          |
| `hover:rotate-45`  | Rotates element 45° on hover  |
| `hover:rotate-90`  | Rotates element 90° on hover  |
| `hover:rotate-135` | Rotates element 135° on hover |
| `hover:rotate-180` | Rotates element 180° on hover |
| `hover:rotate-225` | Rotates element 225° on hover |
| `hover:rotate-270` | Rotates element 270° on hover |
| `hover:rotate-315` | Rotates element 315° on hover |




### Transition Utilities

Use transition utilities to animate property changes smoothly, especially useful with scaling and transform effects.

#### Duration Classes

| Class Name      | CSS Equivalent                  | Description                         |
| --------------- | ------------------------------- | ----------------------------------- |
| `.duration-150` | `transition-duration: 150ms`    | Short transitions                   |
| `.duration-200` | `transition-duration: 200ms`    | Common for button hovers            |
| `.duration-250` | `transition-duration: 250ms`    | Moderate timing                     |
| `.duration-300` | `transition-duration: 300ms`    | Balanced for most UI interactions   |
| `.duration-500` | `transition-duration: 500ms`    | Slow transition for dramatic effect |
| `.duration-700` | `transition-duration: 700ms`    | Very slow transition |


#### Transition Properties


| Class Name              | CSS Equivalent   | Description |
| --- | --- | --- |
| `.transition`           | `transition-property: all;`       | Enables transitions on all properties using a smooth easing function     |
| `.transition-rotate` | `transition-property: rotate;` | Applies smooth transitions only to `rotate` |


#### Example with Transitions



<div class="w-fit p-3 border m-5 rotate-180 rounded hover:rotate-0 transition-rotate duration-500">Hover me</div>

```html
<div class="rotate-180 hover:rotate-0 transition-rotate duration-500">Hover me</div>
```


#### Notes

* Combine `.transition-rotate` with `.duration-*` for smooth rotation.
* Use `.transition` if multiple CSS properties (e.g., color, box-shadow) should animate together.
* Ensure elements with transforms do not interfere with layout (e.g., overlapping or scaling out of bounds).

