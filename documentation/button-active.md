<button class="btn-blue mt-4">Normal</button>
<button class="btn-blue mt-4 active">Active</button>
<button class="btn-blue mt-4" disabled>Disabled</button>

--


The `.active` class visually indicates that the button is currently selected, pressed, or toggled. It is useful for:

* Toggle buttons (on/off states)
* Multi-button selections
* Navigation highlights

Note: Make sure the button is **not disabled**, as `:disabled` takes precedence over `.active`.


### Example

<button class="btn btn-blue active mt-4">Active</button>

```html
<button class="btn btn-blue active">Active</button>
```



### Active Button Color list 

| Color | CSS Class | Output |
| --- | --- |
| **Yellow**  | <button class="px-3 w-100 btn-yellow active">Yellow button</button> |
| **Orange**  | <button class="px-3 w-100 btn-orange active">Orange button</button> |
| **Red**     | <button class="px-3 w-100 btn-red active">Red button</button> |
| **Pink**    | <button class="px-3 w-100 btn-pink active">Pink button</button> |
| **Purple**  | <button class="px-3 w-100 btn-purple active">Purple button</button> |
| **Blue**    | <button class="px-3 w-100 btn-blue active">Blue button</button> |
| **Cyan**    | <button class="px-3 w-100 btn-cyan active">Cyan button</button> |
| **Green**   | <button class="px-3 w-100 btn-green active">Green button</button> |
| **White**   | <button class="px-3 w-100 btn-white active">White button</button> |
| **Black**   | <button class="px-3 w-100 btn-black active">Black button</button> |