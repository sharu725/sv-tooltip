<script>
  export let tip = "";
  export let top = false;
  export let right = false;
  export let bottom = false;
  export let left = false;
  export let active = false;

  export let color = "#0f172a";

  const tooltip = (element) => {
    const slot = element.getBoundingClientRect();
    const tooltip = element.nextElementSibling;

    tooltip.style.setProperty("--tooltip-color", color);
    element.onmouseover = () => {
      tooltip.style.opacity = 1;
      tooltip.style.zIndex = "10";
    };
    element.onmouseout = () => {
      tooltip.style.opacity = 0;
      tooltip.style.zIndex = "-1";
    };
    const elHeight = slot.height;
    const elWidth = slot.width;
    const { height, width } = tooltip.getBoundingClientRect();
    let topGap;
    let rightGap;
    let bottomGap;
    let leftGap;
    if (top) {
      leftGap = -Math.floor(width / 2 - elWidth / 2);
      bottomGap = Math.floor(elHeight + 8);
    } else if (right) {
      leftGap = Math.floor(elWidth + 12);
      bottomGap = -(elHeight / 2 - height / 2);
    } else if (bottom) {
      leftGap = -Math.floor(width / 2 - elWidth / 2);
      topGap = Math.floor(elHeight + 8);
    } else if (left) {
      leftGap = -Math.floor(width + 12);
      bottomGap = -(elHeight / 2 - height / 2);
    } else {
      leftGap = -Math.floor(width / 2 - elWidth / 2);
      topGap = Math.floor(elHeight + 8);
      tooltip.style.bottom = "unset";
      tooltip.style.right = "unset";
    }

    tooltip.style.top = `${topGap}px`;
    tooltip.style.bottom = `${bottomGap}px`;
    tooltip.style.right = `${rightGap}px`;
    tooltip.style.left = `${leftGap}px`;
  };
</script>

<span class="tooltip-wrapper">
  <span class="tooltip-slot" use:tooltip>
    <slot />
  </span>
  <div class="tooltip" class:active>
    {#if tip}
      <div class="tip" class:top class:right class:bottom class:left>
        {tip}
      </div>
    {:else}
      <slot name="custom-tip" />
    {/if}
  </div>
</span>

<style>
  .tooltip-wrapper {
    position: relative;
  }
  .tooltip {
    position: absolute;
    display: block;
    opacity: 0;
    white-space: nowrap;
    z-index: -1;
    background-color: var(--tooltip-color);
  }
  .tooltip.active {
    opacity: 1;
    z-index: 10;
  }
  .tooltip-slot {
    display: inline-block;
  }
  .tooltip {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    transition-duration: 300ms;
    color: #ffffff;
    border-radius: 0.25rem;
  }
  .tip::before {
    content: "";
    position: absolute;
    border: 8px solid transparent;
    border-top: 0;
    border-bottom: 8px solid var(--tooltip-color);
    z-index: -1;
  }
  .tip.top::before {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%) rotate(180deg);
  }
  .tip.right::before {
    left: -12px;
    transform: translateY(60%) rotate(270deg);
  }
  .tip.bottom::before {
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
  }
  .tip.left::before {
    right: -12px;
    transform: translateY(60%) rotate(90deg);
  }
  .tooltip.active {
    opacity: 1;
    visibility: initial;
  }
</style>
