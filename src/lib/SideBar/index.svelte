<script lang="ts">
  import Topics from './Topics.svelte';
  import Topic from './Topic.svelte';

  const topics = [
    {
      topic: 'Glimpse of Chaos',
      subtopics: [
        'Logistic Difference Equation',
        'Cantor Set',
        'The Koch Snowflake',
        'Mandelbrot Set',
        'Julia Set'
      ]
    },
    { topic: 'Game Theory' },
    { topic: 'CS:GO' }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
</svelte:head>

<div class="container">
  <h1 style="font-family: Amatic SC">Topics  I've Rambled About</h1>
  <div class="posts">
    {#each topics as { topic, subtopics }}
      {#if subtopics && subtopics.length > 0}
        <Topics text={topic}>
          {#each subtopics as subtopic}
            <Topic text={subtopic} />
          {/each}
        </Topics>
      {:else}
        <Topic text={topic} />
      {/if}
    {/each}
  </div>
</div>

<style>
  .container {
    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  }

  .posts {
    max-width: 100%;
  }
</style>
