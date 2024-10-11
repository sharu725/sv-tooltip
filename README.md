## Svelte Tooltip

```svelte
<script>
  import Tooltip from "sv-tooltip"
</script>

<Tooltip tip="This is a button" bottom>
  <button>Hello</button>
</Tooltip>
```

### Installation

```bash
npm i -D sv-tooltip
```

### Active Tooltip

```svelte
  <Tooltip tip="This is a button" bottom active>
    <button>Hello</button>
  </Tooltip>
```

### Component Tooltip

```svelte
  <Tooltip tip="This is a button" top>
    <Button>Hello</Button>
  </Tooltip>
```

### Text Tooltip

```svelte
  <p>
    Something <Tooltip tip="It was actially a dream" top>weird</Tooltip> happened
    last night
  </p>
```

### Colored Tooltip

```svelte
  <p>
     <Tooltip tip="It was actially a dream" bottom color="#ffff00">Something</Tooltip>
  </p>
```

### Pass HTML to tip

```svelte
  <Tooltip tip="<marquee>This one moves!</marquee>" top>
    <button>A button</button>
  </Tooltip>
```

|  props   |                 function                 |
| :------: | :--------------------------------------: |
|  `top`   |           show tooltip at top            |
| `right`  |          show tooltip at right           |
| `bottom` |          show tooltip at bottom          |
|  `left`  |           show tooltip at left           |
| `active` |         show tooltip by default          |
| `color`  | hex value to change the color of tooltip |
