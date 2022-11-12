<script>
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "./Button.svelte";
</script>

<div class="content">
  <h2>A simple paragraph</h2>
  <p>
    Something <Tooltip tip="It was actially a dream" top><b>wierd</b></Tooltip> happened
    last night
  </p>

  <h2>A DOM element</h2>
  <Tooltip tip="This is a button" bottom>
    <button>Hello</button>
  </Tooltip>

  <h2>A svelte component</h2>
  <Tooltip tip="This is a button" right color="coral">
    <Button
      >Tooltip with color <br />something more <br />another line <br />more
      <br />things <br />are <br />possible</Button
    >
  </Tooltip>

  <br />
  <br />
  <Tooltip tip="This is a button" left>
    <Button>Component</Button>
  </Tooltip>
  <br />
  <br />
  <Tooltip tip="This is a button" bottom active>
    <Button>Active Tooltip</Button>
  </Tooltip>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 5rem auto;
  }
</style>
