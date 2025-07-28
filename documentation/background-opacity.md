Use background opacity utility classes to control the transparency level of background colors. These utilities can be used in conjunction with background color `bg-[color]` definitions.

### Syntax

```html
.bg-opacity-[value]
```

### Available Values

| Class             | Opacity |
| ----------------- | ------- |
| `bg-opacity-0`   | 0       |
| `bg-opacity-5`   | 0.05    |
| `bg-opacity-10`  | 0.1     |
| `bg-opacity-15`  | 0.15    |
| `bg-opacity-20`  | 0.2     |
| `bg-opacity-25`  | 0.25    |
| `bg-opacity-30`  | 0.3     |
| `bg-opacity-35`  | 0.35    |
| `bg-opacity-40`  | 0.4     |
| `bg-opacity-45`  | 0.45    |
| `bg-opacity-50`  | 0.5     |
| `bg-opacity-55`  | 0.55    |
| `bg-opacity-60`  | 0.6     |
| `bg-opacity-65`  | 0.65    |
| `bg-opacity-70`  | 0.7     |
| `bg-opacity-75`  | 0.75    |
| `bg-opacity-80`  | 0.8     |
| `bg-opacity-85`  | 0.85    |
| `bg-opacity-90`  | 0.9     |
| `bg-opacity-95`  | 0.95    |
| `bg-opacity-100` | 1       |


### Examples


<div class="bg-blue bg-opacity-0 p-4 mb-2 mt-4 border rounded-3">
  Fully Transparent (bg-opacity-0)
</div>

```html
<div class="bg-blue bg-opacity-0">
  Fully Transparent (bg-opacity-0)
</div>
```

<div class="bg-blue bg-opacity-50 p-4 mb-2 border rounded-3">
  Semi-Transparent (bg-opacity-50)
</div>

```html
<div class="bg-blue bg-opacity-50">
  Semi-Transparent (bg-opacity-50)
</div>

```

<div class="bg-blue bg-opacity-100 p-4 mb-2 border rounded-3">
  Fully Opaque (bg-opacity-100)
</div>



```html
<div class="bg-blue bg-opacity-100">
  Fully Opaque (bg-opacity-100)
</div>
```