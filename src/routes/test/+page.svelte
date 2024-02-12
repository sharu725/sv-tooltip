<script>
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "../Button.svelte";
</script>

<div class="content">
  <Tooltip top>
    hello
    <span slot="custom-tip">
      <Button on:click={() => alert("something")}>Alert something</Button>
    </span>
  </Tooltip>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 5rem auto;
  }
</style>
