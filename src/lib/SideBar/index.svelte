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
  <ul class="posts">
    <li><a href="/blog">Index</a></li>
    <li><a href="/blog/lfe">Logistic Difference Equation</a></li>
  </ul>
</div>
