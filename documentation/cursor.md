
Use cursor utility classes to control the mouse pointer appearance on hover. These classes map directly to standard CSS `cursor` values, making it easy to indicate interactivity or context.

### Syntax

```
.cursor-[value]
```

Where `[value]` is a supported cursor type.


### Available Classes

| Class                 | CSS Value     | Description                                 |
| --------------------- | ------------- | ------------------------------------------- |
| `.cursor-auto`        | `auto`        | Browser determines the cursor               |
| `.cursor-default`     | `default`     | Default arrow cursor                        |
| `.cursor-pointer`     | `pointer`     | Indicates a clickable element (like a link) |
| `.cursor-help`        | `help`        | Shows a help indicator                      |
| `.cursor-wait`        | `wait`        | Indicates a background process is running   |
| `.cursor-text`        | `text`        | Indicates selectable text                   |
| `.cursor-crosshair`   | `crosshair`   | Shows a crosshair icon                      |
| `.cursor-not-allowed` | `not-allowed` | Indicates an action is not allowed          |
| `.cursor-zoom-in`     | `zoom-in`     | Indicates zoom-in functionality             |
| `.cursor-zoom-out`    | `zoom-out`    | Indicates zoom-out functionality            |
| `.cursor-grab`        | `grab`        | Indicates draggable content                 |


### Examples

<div class="body w-256px mt-4">
<div class="rounded-3 border p-2 mb-3 text-center cursor-pointer">cursor-pointer</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-wait">cursor-wait</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-text">cursor-text</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-help">cursor-help</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-crosshair">cursor-crosshair</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-not-allowed">cursor-not-allowed</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-zoom-in">cursor-zoom-in</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-zoom-out">cursor-zoom-out</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-grab">cursor-grab</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-default">cursor-default</div>
<div class="rounded-3 border p-2 mb-3 text-center cursor-auto">cursor-auto</div>
</div>

```html
<div class="cursor-pointer">cursor-pointer</div>
<div class="cursor-wait">cursor-wait</div>
<div class="cursor-text">cursor-text</div>
<div class="cursor-help">cursor-help</div>
<div class="cursor-crosshair">cursor-crosshair</div>
<div class="cursor-not-allowed">cursor-not-allowed</div>
<div class="cursor-zoom-in">cursor-zoom-in</div>
<div class="cursor-zoom-out">cursor-zoom-out</div>
<div class="cursor-grab">cursor-grab</div>
<div class="cursor-default">cursor-default</div>
<div class="cursor-auto">cursor-auto</div>
```
