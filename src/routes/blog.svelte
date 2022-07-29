<script>
  import NavBar from '$lib/NavBar.svelte';
  import BlogPost from '$lib/BlogPost.svelte';
  import LFE from '$lib/LFE.svelte';
</script>

<NavBar pageType="blog" />
<BlogPost>
  <LFE />
</BlogPost>

<style>
  :global(body) {
    margin: 0;
  }
</style>
