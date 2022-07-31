<script type="ts">
  import NavBar from '$lib/NavBar.svelte';
  import SideBar from '$lib/SideBar.svelte';
  import { page } from '$app/stores';

  console.log($page);
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
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: 7vh auto;
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
</style>
