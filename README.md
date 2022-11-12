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

``npm i -D sv-tooltip``

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
    Something <Tooltip tip="It was actially a dream" top><b>wierd</b></Tooltip> happened
    last night
  </p>
```

|  props   |        function         |
| :------: | :---------------------: |
|  `top`   |   show tooltip at top   |
| `right`  |  show tooltip at right  |
| `bottom` | show tooltip at bottom  |
|  `left`  |  show tooltip at left   |
| `active` | show tooltip by default |
