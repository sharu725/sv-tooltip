<script>
  import Tooltip from "$lib/Tooltip.svelte";
  import { onMount } from "svelte";

  let items = [1, 2, 3, 4, 5];

  onMount(async () => {
    setTimeout(() => {
      items = [...items, 6, 7, 8, 9];
    }, 10000);
  });
</script>

<div class="content">
  <Tooltip tip="offline" right active>
    <div class="material-symbols-outlined">signal_wifi_bad</div>
  </Tooltip>
</div>

<ul class="content">
  {#each items as item}
    <li>
      Amazing item number <Tooltip tip="This is {item}" top>{item}</Tooltip>
    </li>
  {/each}
</ul>

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
