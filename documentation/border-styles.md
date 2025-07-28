Use `.border-*` style classes to control the **style of the border lines**, such as solid, dashed, dotted, or double. 

### Class Reference

| Class            | CSS Output             | Description              |
| ---------------- | ---------------------- | ------------------------ |
| `border-solid`  | `border-style: solid`  | A solid, continuous line |
| `border-dashed` | `border-style: dashed` | A series of dashes       |
| `border-dotted` | `border-style: dotted` | A series of dots         |
| `border-double` | `border-style: double` | Two solid lines (double) |


#### Examples


<div class="w-fit mt-3 px-4 py-2 border-3 rounded border-solid">Solid Border</div>

```html
<div class="border border-solid">Solid Border</div>
``` 

<div class="w-fit mt-3 px-4 py-2 border-3 rounded border-dashed">Dashed Border</div>

```html
<div class="border-2 border-dashed">Dashed Border</div>
``` 

<div class="w-fit mt-3 px-4 py-2 border-3 rounded border-dotted">Dotted Border</div>

```html
<div class="border-1 border-dotted">Dotted Border</div>
``` 

<div class="w-fit mt-3 px-4 py-2 border-3 rounded border-double">Double Border</div>

```html
<div class="border-3 border-double">Double Border</div>
```

---

### Notes

* These classes only define the **style**, not the width or color. Use them with:

  * `border`, `border-2`, etc. for **width**
  * `border-red`, `light:border-grey-100`, etc. for **color**
