<script>
  import NavBar from '$lib/NavBar.svelte';
  import Terminal from '$lib/Terminal/index.svelte';
  import Timeline from '$lib/Timeline.svelte';
</script>

<div class="container">
  <div class="content-container">
    <NavBar pageType="about-me" />
    <Terminal />
    <Timeline />
  </div>
</div>

<!--
<div id="about-me-container">
  <img id="avatar" src="/images/no.jpg" />
</div>
-->

<style>
  :global(:root) {
    --ratio: 1.61803398875;
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));
  }

  :global(.stack) {
    --space: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  :global(.stack > *) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :global(.stack > * + *) {
    margin-top: var(--space);
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  }

  .content-container {
    grid-row: 1 / last-line;
    grid-column: 2 / 3;
  }

  #about-me-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #avatar {
    margin-left: auto;
    margin-right: auto;
    width: min(30vw, 160px);
    border-radius: min(30vw, 150px);
  }
</style>
