<script lang="ts">
  import { page } from '$app/stores';

  type Topic = {
    title: string;
    route: string;
  };

  let subtopics: Topic[] = [];

  $: {
    const re = /^blog\/(chaos|gametheory|reveries)\/?.*$/;
    const matches = $page.routeId?.match(re);
    const match = matches ? matches[1] : null;

    switch (match) {
      case 'reveries':
        subtopics = [
          { title: 'On Effectiveness', route: 'reveries/on-effectiveness' }
        ];
      break;

      case 'chaos':
        subtopics = [
          { title: 'Intro', route: '/blog/chaos' },
          { title: 'Logistic Difference Equation', route: '/blog/chaos/lfe' },
          { title: 'Cantor Set', route: '/blog/chaos/cantor-set' },
          { title: 'The Koch Snowflake', route: '/blog/chaos/koch-snowflake' },
          { title: 'Mandelbrot Set', route: '/blog/chaos/mandelbrot-set' },
          { title: 'Julia Set', route: '/blog/chaos/julia-set' }
        ];
        break;

      default:
        subtopics = [];
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
</svelte:head>

<div class="container">
  {#if subtopics.length > 0}
    <h1 style="font-family: Amatic SC">Table of Contents</h1>
    <ul class="topics">
      {#each subtopics as subtopic}
        <li>
          <a class:selected={subtopic.route === `/${$page.routeId}`} href={subtopic.route}
            >{subtopic.title}</a
          >
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .container {
    width: 50%;
    margin-left: auto;
    margin-right:auto;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a.selected {
    background-color: black;
    color: white;
  }

  a:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  ul.topics {
    list-style-type: none;
    padding: 0;
  }
</style>
