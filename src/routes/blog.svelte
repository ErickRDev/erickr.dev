<script>
  import NavBar from '$lib/NavBar.svelte';
  import SideBar from '$lib/SideBar/index.svelte';
  import LFE from '$lib/LFE.svelte';
</script>

<div class="container">
  <div class="sidebar-container">
    <SideBar />
  </div>
  <div class="content-container">
    <NavBar pageType="blog" />
    <LFE />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  }

  .sidebar-container {
    grid-row: 1 / last-line;
    grid-column: 1 / 2;
  }

  .content-container {
    grid-row: 1 / last-line;
    grid-column: 2 / 3;
  }
</style>
