<script lang="ts">
  import GitHub from '$lib/Icons/GitHub.svelte';
  import LinkedIn from '$lib/Icons/LinkedIn.svelte';
  import Settings from './Icons/Settings.svelte';

  type PageType = 'blog' | 'about-me';

  export let pageType: PageType;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Square+Peg" />
</svelte:head>

<div id="navbar-container">
  <nav id="navbar">
    <ul class="container left-side">
      <li><svelte:component this={LinkedIn} /></li>
      <li><svelte:component this={GitHub} /></li>
      {#if pageType === 'blog'}
        <li><span id="blog-button"><a href="/">About me</a></span></li>
      {:else}
        <li><span id="blog-button"><a href="/blog">The blog</a></span></li>
      {/if}
    </ul>
    <span id="logo">erickr.dev</span>
    <div class="container right-side">
      <svelte:component this={Settings} />
    </div>
  </nav>
  <svg width="100%" height="0.5em">
    <line x1="0" y1="0" x2="100%" y2="0" stroke="black" />
  </svg>
</div>

<style>
  #navbar-container {
    max-width: 60vw;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  #navbar {
    min-height: 3vh;
    display: flex;
    align-items: center;
  }

  #navbar a {
    text-decoration: none;
    color: black;
  }

  #logo {
    max-width: 100px;
    font-family: 'Amatic SC';
    /* font-family: 'Square Peg'; */
    font-size: 2.2em;
  }

  #blog-button {
    font-family: 'Amatic SC';
    /* font-family: 'Square Peg'; */
    font-size: 1.5em;
  }

  .container {
    display: flex;
    align-items: baseline;
    flex: 1;
    padding: 0;
  }

  .left-side {
    justify-content: flex-start;
  }

  .right-side {
    justify-content: flex-end;
  }

  .container li {
    list-style-type: none;
    margin: 0 0.5%;
  }
</style>
