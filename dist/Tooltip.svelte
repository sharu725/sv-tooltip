<script>
  export let tip = "";
  export let top = false;
  export let right = false;
  export let bottom = false;
  export let left = false;
  export let active = false;
  export let color = "#0f172a";

  let arrowTopGap = 0;

  const tooltip = (element) => {
    const tooltip = element.querySelector(".tooltip");
    const tip = element.querySelector(".tip");
    tooltip.style.setProperty("--tooltip-color", color);

    const showTooltip = () => {
      updateTooltipPosition();
      tooltip.style.opacity = 1;
      tooltip.style.zIndex = "10";
    };

    const hideTooltip = () => {
      tooltip.style.opacity = 0;
      tooltip.style.zIndex = "-1";
    };

    const updateTooltipPosition = () => {
      const { height: element_hgt, width: element_wdth } =
        element.getBoundingClientRect();
      const { height: tip_height, width: tip_width } =
        tooltip.getBoundingClientRect();
      let topGap;
      let rightGap;
      let bottomGap;
      let leftGap;
      if (top) {
        leftGap = -(tip_width / 2 - element_wdth / 2);
        bottomGap = element_hgt + 12;
      } else if (right) {
        leftGap = element_wdth + 12;
        bottomGap = Math.abs(element_hgt / 2 - tip_height / 2);
        arrowTopGap = tip_height / 2;
      } else if (bottom) {
        leftGap = -(tip_width / 2 - element_wdth / 2);
        topGap = element_hgt + 12;
      } else if (left) {
        leftGap = -(tip_width + 12);
        bottomGap = Math.abs(element_hgt / 2 - tip_height / 2);
        arrowTopGap = tip_height / 2;
      } else {
        leftGap = -Math.floor(tip_width / 2 - element_wdth / 2);
        topGap = Math.floor(element_hgt + 8);
        tooltip.style.bottom = "unset";
        tooltip.style.right = "unset";
      }
      tooltip.style.top = `${topGap}px`;
      tooltip.style.bottom = `${bottomGap}px`;
      tooltip.style.right = `${rightGap}px`;
      tooltip.style.left = `${leftGap}px`;
      tip.style.setProperty("--top-gap", `${arrowTopGap - 4}px`);
    };

    const resizeObserver = new ResizeObserver(updateTooltipPosition);
    resizeObserver.observe(element);

    element.addEventListener("mouseover", showTooltip);
    element.addEventListener("mouseout", hideTooltip);

    return {
      destroy() {
        element.removeEventListener("mouseover", showTooltip);
        element.removeEventListener("mouseout", hideTooltip);
        resizeObserver.unobserve(element);
      },
    };
  };
</script>

<span class="tooltip-slot" use:tooltip>
  <slot />
  <span class:tooltip={true} class:active {...$$restProps}>
    {#if tip}
      <span class:tip={true} class:top class:right class:bottom class:left>
        {@html tip}
      </span>
    {:else}
      <slot name="custom-tip" />
    {/if}
  </span>
</span>

<style>
  .tooltip-slot {
    position: relative;
    display: inline-block;
  }
  .tooltip {
    position: absolute;
    display: block;
    white-space: nowrap;
    opacity: 0;
    z-index: -1;
    padding: 0.25rem 0.5rem;
    background-color: var(--tooltip-color);
    color: #ffffff;
    border-radius: 0.25rem;
    transition:
      opacity 300ms,
      z-index 300ms;
  }
  .tooltip.active {
    visibility: initial;
    opacity: 1;
    z-index: 10;
  }
  .tip::before {
    content: "";
    position: absolute;
    border: 8px solid transparent;
    border-top: 0;
    transition-duration: 300ms;
    border-bottom: 8px solid var(--tooltip-color);
    z-index: -1;
  }
  .tip.top::before {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%) rotate(180deg);
  }
  .tip.right::before {
    left: -11px;
    top: var(--top-gap);
    transform: rotate(270deg);
  }
  .tip.bottom::before {
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
  }
  .tip.left::before {
    right: -11px;
    top: var(--top-gap);
    transform: rotate(90deg);
  }
</style>
