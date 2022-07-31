<script type="ts">
  import NavBar from '$lib/NavBar.svelte';
  import SideBar from '$lib/SideBar.svelte';
  import TOCBar from '$lib/TOCBar.svelte';
</script>

<div class="container">
  <div class="navbar-container">
    <NavBar pageType="blog" />
  </div>
  <div class="sidebar-container">
    <SideBar />
  </div>
  <div class="content-container">
    <slot />
  </div>
  <div class="toc-container">
    <TOCBar />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: max(100px, 7vh) auto;
    grid-template-columns: 1fr 2fr 1fr;
  }

  .navbar-container {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .sidebar-container {
    grid-column: 1 / 2;
    grid-row: 2 / last-line;
  }

  .content-container {
    grid-column: 2 / 3;
    grid-row: 2 / last-line;
  }

  .toc-container {
    grid-column: 3 / 4;
    grid-row: 2 / last-line;
  }
</style>
