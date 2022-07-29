<script lang="ts">
  import Topics from './Topics.svelte';
  import Topic from './Topic.svelte';

  const topics = [
    {
      topic: 'Chaos',
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

<div class="sidebar">
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
  .sidebar {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding-right: 2px;
  }

  .posts {
    max-width: 100%;
  }
</style>
