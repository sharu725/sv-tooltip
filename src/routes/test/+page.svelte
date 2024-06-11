<script>
  import Tooltip from "$lib/Tooltip.svelte";
</script>

<div class="content">
  <Tooltip tip="offline" top>
    <div class="material-symbols-outlined">signal_wifi_bad</div>
  </Tooltip>
</div>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
</svelte:head>

<style>
  .content {
    max-width: 800px;
    margin: 5rem auto;
  }
</style>
