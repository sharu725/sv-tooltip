<script>
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "./Button.svelte";
</script>

<div class="content">
  <h1>Sv-tooltip</h1>
  <p>A tooltip utility for svelte components.</p>
  <p>
    The package is <a
      href="https://bundlephobia.com/package/sv-tooltip"
      target="_blank"
      rel="nofollow noreferrer noopener">less than 1KB</a
    >
  </p>
  <br />
  <fieldset>
    <legend>Paragraph</legend>
    <p>
      Something <Tooltip tip="It was actially a dream" top><b>wierd</b></Tooltip
      > happened last night
    </p>
  </fieldset>

  <fieldset>
    <legend>DOM element</legend>
    <Tooltip tip="This is a button" bottom>
      <button>Hello</button>
    </Tooltip>
  </fieldset>

  <fieldset>
    <legend>Svelte component</legend>
    <Tooltip tip="This is a button" right color="coral">
      <Button
        >A button <br />can be taller <br />than a normal <br />height
      </Button>
    </Tooltip>
    <br />
    <br />
    <Tooltip tip="This is a button" left>
      <Button>Component</Button>
    </Tooltip>
  </fieldset>

  <fieldset>
    <legend>Active Tooltip</legend>
    <Tooltip tip="This is a button" bottom active>
      <Button>Active Tooltip</Button>
    </Tooltip>
  </fieldset>

  <nav>
    <ul>
      <li>
        <a href="https://github.com/sharu725/sv-tooltip">github</a>
      </li>
      <li>
        <a href="https://webjeda.com">webjeda</a>
      </li>
    </ul>
  </nav>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 5rem auto;
  }
  fieldset {
    margin-bottom: 2rem;
  }
  nav ul {
    display: flex;
    padding: 0;
    list-style: none;
  }
  nav ul li {
    margin-right: 1rem;
  }
</style>
