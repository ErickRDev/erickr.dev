<script lang="ts">
  import { page } from '$app/stores';

  type Topic = {
    title: string;
    route: string;
  };

  let topics: Topic[] = [
    { title: 'Reveries', route: '/blog/reveries' },
    { title: 'Pictures of Chaos', route: '/blog/chaos' }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
</svelte:head>

<div class="container">
  <h1 style="font-family: Amatic SC">What I've Rambled About</h1>
  <ul class="topics">
    <a class:selected={$page.routeId === 'blog'} href="/blog">Hello, World</a>
    {#each topics as topic}
      <li>
        <a class:selected={`/${$page.routeId}`.startsWith(topic.route)} href={topic.route}
          >{topic.title}</a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
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
