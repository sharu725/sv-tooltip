<script>
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "./Button.svelte";
  import Prism from "prismjs";
  import 'prism-svelte';
  let language = "svelte";
</script>

<div class="content">
  <h1>Sv-tooltip</h1>
  <p>A tooltip utility for svelte components.</p>
  <p>
    The package weighs <a
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

    <div class="code">
      {@html Prism.highlight(
        `<p>Something <Tooltip tip="It was actially a dream" top><b>wierd</b></Tooltip> happened last night</p>`,
        Prism.languages[language]
      )}
    </div>
  </fieldset>

  <fieldset>
    <legend>DOM element</legend>
    <Tooltip tip="This is a button" bottom>
      <button>Hello</button>
    </Tooltip>
    <br />
    <br />
    <div class="code">
      {@html Prism.highlight(
        `<Tooltip tip="This is a button" bottom>
  <button>Hello</button>
</Tooltip>`,
        Prism.languages[language]
      )}
    </div>
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

    <br />
    <br />
    <div class="code">
      {@html Prism.highlight(
        `<Tooltip tip="This is a button" right color="coral">
  <Button>A button <br />
    can be taller <br />
    than a normal <br />
    height
  </Button>
</Tooltip>`,
        Prism.languages[language]
      )}
    </div>
  </fieldset>

  <fieldset>
    <legend>Active Tooltip</legend>
    <Tooltip tip="This is a button" bottom active>
      <Button>Active Tooltip</Button>
    </Tooltip>
    <br />
    <br />
    <div class="code">
      {@html Prism.highlight(
        `<Tooltip tip="This is a button" bottom active>
  <Button>Active Tooltip</Button>
</Tooltip>`,
        Prism.languages[language]
      )}
    </div>
  </fieldset>
  <fieldset>
    <legend>Pass Tailwind Classes</legend>
    <Tooltip tip="This is a button" bottom class="font-bold text-xl">
      <Button>font-bold text-xl</Button>
    </Tooltip>
    <br />
    <br />
    <div class="code">
      {@html Prism.highlight(
        `<Tooltip tip="This is a button" bottom class="font-bold text-xl">
  <Button>font-bold text-xl</Button>
</Tooltip>`,
        Prism.languages[language]
      )}
    </div>
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

<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
    rel="stylesheet"
  />
</svelte:head>

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

  :global(.font-bold) {
    font-weight: bold;
  }
  :global(.text-xl) {
    font-size: 1.5em;
  }
  .code {
    white-space: pre-wrap;
    background-color: #eee;
    padding: 10px;
    border-radius: 4px;
  }
</style>
