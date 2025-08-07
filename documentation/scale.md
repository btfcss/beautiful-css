The `scale` utility classes visually resize elements using `transform: scale()`. 


### Syntax

```
[state]:scale-[ratio]
```

* **\[state]** – *(optional)* `hover` or `focus`.
* **\[ratio]** – The desired scale percentage (e.g. `105` → 105% → `scale(1.05)`)


### Usage Examples

<div class="scale-90 w-fit mt-4 border rounded p-2">Scaled to 90%</div>

```html
<!-- Static scale -->
<div class="scale-90">Scaled to 90%</div>
```

<div class="hover:scale-110 w-fit mt-4 border rounded p-2">Scales to 110% on hover</div>

```html
<!-- On hover -->
<div class="hover:scale-110">Scales to 110% on hover</div>
```

<input type="text" class="form-control focus:scale-105 w-fit mt-4 p-2" placeholder="Click to focus"/>

```html
<!-- On focus -->
<input type="text" class="form-control focus-scale-105" />
```



### Available Classes

| Class Name  | CSS Equivalent           | Description                 |
| ----------- | ------------------------ | --------------------------- |
| `scale-50`  | `transform: scale(0.5)`  | Shrinks element to 50% size |
| `scale-80`  | `transform: scale(0.8)`  | Shrinks element to 80% size |
| `scale-90`  | `transform: scale(0.9)`  | Shrinks element to 90% size |
| `scale-95`  | `transform: scale(0.95)` | Slightly smaller (95%)      |
| `scale-98`  | `transform: scale(0.98)` | Near full size (98%)        |
| `scale-100` | `transform: scale(1)`    | Default size (100%)         |
| `scale-102` | `transform: scale(1.02)` | Slightly larger (102%)      |
| `scale-105` | `transform: scale(1.05)` | Slightly larger (105%)      |
| `scale-110` | `transform: scale(1.1)`  | Enlarges to 110%            |
| `scale-120` | `transform: scale(1.2)`  | Enlarges to 120%            |
| `scale-150` | `transform: scale(1.5)`  | Doubles element size by 50% |















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
| `.transition-transform` | `transition-property: transform;` | Applies smooth transitions only to `transform` |


#### Example with Transitions


<div class="btn hover:scale-120 transition-transform duration-300 w-fit mt-4 border rounded p-2">Hover me</div>


```html
<div class="btn hover:scale-120 transition-transform duration-300">Hover me</div>
```


#### Notes

* Combine `.transition-transform` with `.duration-*` for smooth scaling.
* Use `.transition` if multiple CSS properties (e.g., color, box-shadow) should animate together.
* Ensure elements with transforms do not interfere with layout (e.g., overlapping or scaling out of bounds).
