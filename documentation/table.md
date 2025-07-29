The table utilities provide a clean, accessible, and theme-aware style for tabular data. Tables are styled with spacing, consistent borders, and optional striping for better readability.

### Example

<table class="table-striped">
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.50</td>
    </tr>
  </tbody>
</table>


```html
<table class="table-striped">
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.50</td>
    </tr>
  </tbody>
</table>
```


### Striped Table Rows

| Class            | Description                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `.table-striped` | Applies background stripes to every odd row in `<tbody>` using a `light-dark()` color mix  |

